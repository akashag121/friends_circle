package com.socialmedia.friendscirclebackend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.transaction.Transactional;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "stories")
@Transactional
@org.springframework.transaction.annotation.Transactional
public class storyEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "story_id")
	private Long storyId;

	@Column(name = "user_id")
	private String userId;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "story_image_id")
	private String storyImageId;

	@Column(name = "story_caption")
	private String storyCaption;

	@Column(name = "created_date")
	private Date createdDate;

	@PrePersist
	protected void onCreate() {
		createdDate = new Date();
	}

	public Long getStoryId() {
		return storyId;
	}

	public void setStoryId(Long storyId) {
		this.storyId = storyId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getStoryImageId() {
		return storyImageId;
	}

	public void setStoryImageId(String storyImageId) {
		this.storyImageId = storyImageId;
	}

	public String getStoryCaption() {
		return storyCaption;
	}

	public void setStoryCaption(String storyCaption) {
		this.storyCaption = storyCaption;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public storyEntity(Long storyId, String userId, String userName, String storyImageId, String storyCaption) {
		super();
		this.storyId = storyId;
		this.userId = userId;
		this.userName = userName;
		this.storyImageId = storyImageId;
		this.storyCaption = storyCaption;
	}

	@Override
	public String toString() {
		return "storyEntity [storyId=" + storyId + ", userId=" + userId + ", userName=" + userName + ", storyImageId="
				+ storyImageId + ", storyCaption=" + storyCaption + ", createdDate=" + createdDate + "]";
	}

	public storyEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

}
