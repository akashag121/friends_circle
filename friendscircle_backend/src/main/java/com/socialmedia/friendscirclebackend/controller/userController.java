package com.socialmedia.friendscirclebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialmedia.friendscirclebackend.entity.userEntity;
import com.socialmedia.friendscirclebackend.entity.userEntityComplete;
import com.socialmedia.friendscirclebackend.service.userService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class userController {

	@Autowired
	public userService userservice;

	@GetMapping("/getAllActiveUsers")
	public List<userEntity> getAllActiveUsersCont() {
		return userservice.getAllActiveUsersServ();
	}

	@GetMapping("/getAllInactiveUsers")
	public List<userEntity> getAllInactiveUsersCont() {
		return userservice.getAllInactiveUsersServ();
	}
	
	@GetMapping("/findUserByUserId/{userId}")
	public userEntity findUserByUserIdCont(@PathVariable Long userId) {
		return userservice.findUserByUserIdServ(userId);
	}
	
	@GetMapping("/findUserByUserIdCompleteData/{userId}")
	public userEntityComplete findUserByUserIdCompleteDataCont(@PathVariable Long userId) {
		return userservice.findUserByUserIdCompleteDataServ(userId);
	}
	
	@PutMapping("/blockUserByUserId/{userId}")
	public void blockUserCont(@PathVariable Long userId) {
		userservice.blockUserServ(userId);
	}
	
	@PutMapping("/unblockUserByUserId/{userId}")
	public void unblockUserCont(@PathVariable Long userId) {
		userservice.unblockUserServ(userId);
	}
	
	

}