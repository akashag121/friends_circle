package com.socialmedia.friendscirclebackend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class userEntityComplete {

	@Id
	@Column(name = "id")
	private Long userId;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "fullName")
	private String fullName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "imageId")
	private String imageId;
	
	@Column(name = "dob")
	private Date dob;

	@Override
	public String toString() {
		return "userEntityComplete [userId=" + userId + ", email=" + email + ", password=" + password + ", fullName="
				+ fullName + ", description=" + description + ", imageId=" + imageId + ", dob=" + dob + "]";
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageId() {
		return imageId;
	}

	public void setImageId(String imageId) {
		this.imageId = imageId;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public userEntityComplete(Long userId, String email, String password, String fullName, String description,
			String imageId, Date dob) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.description = description;
		this.imageId = imageId;
		this.dob = dob;
	}

	public userEntityComplete() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	
	
	
	
	
}
