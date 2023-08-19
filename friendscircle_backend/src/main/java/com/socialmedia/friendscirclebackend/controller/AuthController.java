package com.socialmedia.friendscirclebackend.controller;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.socialmedia.friendscirclebackend.dao.RoleRepository;
import com.socialmedia.friendscirclebackend.dao.UserRepository;
//import com.socialmedia.friendscirclebackend.entity.UserInfoResponse;
//import com.socialmedia.friendscirclebackend.jwt.JwtRequest;
//import com.socialmedia.friendscirclebackend.jwt.JwtResponse;
//import com.socialmedia.friendscirclebackend.jwt.JwtTokenUtil;
//import com.socialmedia.friendscirclebackend.jwt.JwtUserDetailsService;
import com.socialmedia.friendscirclebackend.model.ERole;
import com.socialmedia.friendscirclebackend.model.LoginRequest;
import com.socialmedia.friendscirclebackend.model.MessageResponse;
import com.socialmedia.friendscirclebackend.model.Role;
import com.socialmedia.friendscirclebackend.model.SignupRequest;
import com.socialmedia.friendscirclebackend.model.User;
import com.socialmedia.friendscirclebackend.model.UserResponseWithToken;
import com.socialmedia.friendscirclebackend.service.UserDetailsImpl;
import com.socialmedia.friendscirclebackend.config.AuthRequest;
import com.socialmedia.friendscirclebackend.config.JwtUtil;

//for Angular Client (withCredentials)
//@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
//@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"},allowedHeaders = {"Authorization", "Origin"}, methods = {RequestMethod.GET, RequestMethod.POST})
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
//	@Autowired
//	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

//	@Autowired
//	PasswordEncoder encoder;

//	@Autowired
//	JwtUtil jwtUtil;

//	@Autowired
//	private AuthenticationManager authenticationManager;

//	@Autowired
//	private JwtTokenUtil jwtTokenUtil;


	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), signUpRequest.getEmail(), signUpRequest.getPassword(),
				signUpRequest.getImageId(), signUpRequest.getDescription(), signUpRequest.getFullName(),
				signUpRequest.getDob(), signUpRequest.getGender());

		System.out.println("dob got from input" + user.getDob());
		user.setActive(true);
		Set<String> strRoles = signUpRequest.getRole();
		System.out.println("role from input: " + strRoles);
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					System.out.println("admin passed" + role);
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;

				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

//	@PostMapping("/signout")
//	public ResponseEntity<?> logoutUser() {
//		ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
//		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
//				.body(new MessageResponse("You've been signed out!"));
//	}

	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/")
	public String welcome() {
		return "Welcome to javatechie !!";
	}

	@PostMapping("/authenticate")
	public UserResponseWithToken generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			System.out.println("request " + authRequest);
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		
		String generatedToken	= jwtUtil.generateToken(authRequest.getUsername());
		UserResponseWithToken userResponse = new UserResponseWithToken();
		userResponse.set_token(generatedToken);
		User user =  userRepository.findByUsername(authRequest.getUsername()).get();
		System.out.println("User got from db"+ user);
		userResponse.setId(user.getId());
		userResponse.setUsername(user.getUsername());
		userResponse.setFullName(user.getFullName());
		userResponse.setDescription(user.getDescription());
		userResponse.setDob(user.getDob());
		userResponse.setGender(user.getGender());
		userResponse.setEmail(user.getEmail());
		userResponse.setRoles(user.getRoles());
		userResponse.setImageId(user.getImageId());
		userResponse.setActive(user.isActive());
		return userResponse;
	}

}