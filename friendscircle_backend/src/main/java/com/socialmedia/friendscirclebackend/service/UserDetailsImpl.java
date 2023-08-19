package com.socialmedia.friendscirclebackend.service;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.socialmedia.friendscirclebackend.model.User;

public class UserDetailsImpl implements UserDetails {
  private static final long serialVersionUID = 1L;

  private Long id;

  private String username;

  private String email;
  
  private String description;

  private boolean isActive;

  private String imageId;
  
  private String fullName;

  @JsonIgnore
  private String password;

  private Collection<? extends GrantedAuthority> authorities;
  
  private Date dob;
  
  private String gender;

  public UserDetailsImpl(Long id, String username, String email,String description,
		  boolean isActive ,String imageId, String fullName, String password,
      Collection<? extends GrantedAuthority> authorities, Date dob, String gender) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.description = description;
    this.isActive = isActive;
    this.imageId = imageId;
    this.fullName = fullName;
    this.password = password;
    this.authorities = authorities;
    this.dob = dob;
    this.gender = gender;
  }

  public static UserDetailsImpl build(User user) {
    List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
        .collect(Collectors.toList());

    return new UserDetailsImpl(
        user.getId(), 
        user.getUsername(), 
        user.getEmail(),
        user.getDescription(),
        user.isActive(),
        user.getImageId(),
        user.getFullName(),
        user.getPassword(), 
        authorities,
        user.getDob(),
        user.getGender());
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  public Long getId() {
    return id;
  }

  public Date getDob() {
	return dob;
}

public void setDob(Date dob) {
	this.dob = dob;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getEmail() {
    return email;
  }

  @Override
  public String getPassword() {
    return password;
  }

  
  
  public String getDescription() {
	return description;
}

public void setDescription(String description) {
	this.description = description;
}

public boolean isActive() {
	return isActive;
}

public void setActive(boolean isActive) {
	this.isActive = isActive;
}

public String getImageId() {
	return imageId;
}

public void setImageId(String imageId) {
	this.imageId = imageId;
}



public String getFullName() {
	return fullName;
}

public void setFullName(String fullName) {
	this.fullName = fullName;
}

@Override
  public String getUsername() {
    return username;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    UserDetailsImpl user = (UserDetailsImpl) o;
    return Objects.equals(id, user.id);
  }
}