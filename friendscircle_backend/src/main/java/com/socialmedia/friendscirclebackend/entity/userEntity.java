package com.socialmedia.friendscirclebackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class userEntity {

	@Id
	@Column(name = "id")
	private Long userId;
	
	@Column(name = "fullName")
	private String fullName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "imageId")
	private String imageId;
	
	@Column(name = "isActive")
	private boolean isActive;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
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


	public userEntity(Long userId, String fullName, String description, String imageId) {
		super();
		this.userId = userId;
		this.fullName = fullName;
		this.description = description;
		this.imageId = imageId;
	}

	@Override
	public String toString() {
		return "userEntity [userId=" + userId + ", fullName=" + fullName + ", description=" + description + ", imageId="
				+ imageId + ", isActive=" + isActive + "]";
	}

	public userEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	
	
}
