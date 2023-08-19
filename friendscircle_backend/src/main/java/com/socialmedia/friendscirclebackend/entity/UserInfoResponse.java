//package com.socialmedia.friendscirclebackend.entity;
//
//import java.util.Date;
//import java.util.List;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "users")
//public class UserInfoResponse {
//	
//	@Id
//	@Column(name = "id")
//	private Long id;
//	
//	@Column(name = "username")
//	private String username;
//	
//	@Column(name = "email")
//	private String email;
//	
//	@Column(name = "description")
//	private String description;
//	
//	@Column(name = "isActive")
//	private boolean isActive;
//	
//	@Column(name = "imageId")
//	private String imageId;
//	
//	@Column(name = "fullName")
//	private String fullName;
//	
//	
//	private List<String> roles;
//	
//	@Column(name = "dob")
//	private Date dob;
//	
//	@Column(name = "gender")
//	private String gender;
//
//
//
//	public UserInfoResponse(Long id, String username, String email, String description, boolean isActive,
//			String imageId, String fullName, List<String> roles, Date dob,String gender ) {
//		super();
//		this.id = id;
//		this.username = username;
//		this.email = email;
//		this.description = description;
//		this.isActive = isActive;
//		this.imageId = imageId;
//		this.fullName = fullName;
//		this.roles = roles;
//		this.dob = dob;
//		this.gender = gender;
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	
//	
//	public String getFullName() {
//		return fullName;
//	}
//
//	public void setFullName(String fullName) {
//		this.fullName = fullName;
//	}
//
//	public List<String> getRoles() {
//		return roles;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public boolean isActive() {
//		return isActive;
//	}
//
//	public void setActive(boolean isActive) {
//		this.isActive = isActive;
//	}
//
//	public String getImageId() {
//		return imageId;
//	}
//
//	public void setImageId(String imageId) {
//		this.imageId = imageId;
//	}
//
//	public Date getDob() {
//		return dob;
//	}
//
//	public void setDob(Date dob) {
//		this.dob = dob;
//	}
//
//	public String getGender() {
//		return gender;
//	}
//
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//	
//	
//}