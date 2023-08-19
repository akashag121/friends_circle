package com.socialmedia.friendscirclebackend.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

public class UserResponseWithToken {
	private Long id;
	private String username;
	private String email;
	private String description;
	private boolean isActive;
	private String imageId;
	private String fullName;
	private Set<Role> roles;
	private Date dob;
	private String gender;
	private String _token;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> set) {
		this.roles = set;
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
	public String get_token() {
		return _token;
	}
	public void set_token(String _token) {
		this._token = _token;
	}
	public UserResponseWithToken(Long id, String username, String email, String description, boolean isActive,
			String imageId, String fullName, Set<Role> roles, Date dob, String gender, String _token) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.description = description;
		this.isActive = isActive;
		this.imageId = imageId;
		this.fullName = fullName;
		this.roles = roles;
		this.dob = dob;
		this.gender = gender;
		this._token = _token;
	}
	public UserResponseWithToken() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "UserResponseWithToken [id=" + id + ", username=" + username + ", email=" + email + ", description="
				+ description + ", isActive=" + isActive + ", imageId=" + imageId + ", fullName=" + fullName
				+ ", roles=" + roles + ", dob=" + dob + ", gender=" + gender + ", _token=" + _token + "]";
	}



	
	
}