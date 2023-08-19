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
@Table(name = "posts")
@Transactional
@org.springframework.transaction.annotation.Transactional
public class postEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "post_id")
	private Long postId;

	@Column(name = "user_id")
	private String userId;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "post_image_id")
	private String postImageId;

	@Column(name = "post_caption")
	private String postCaption;

	@Column(name = "likes", columnDefinition = "json")
	private String like;

	@Column(name = "comments", columnDefinition = "json")
	private String comments;

	@Column(name = "created_date")
	private Date createdDate;

	@PrePersist
	protected void onCreate() {
		createdDate = new Date();
	}

	
	public Date getCreatedDate() {
		return createdDate;
	}


	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}


	public Long getPostId() {
		return postId;
	}

	public void setPostId(Long postId) {
		this.postId = postId;
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

	public String getPostImageId() {
		return postImageId;
	}

	public void setPostImageId(String postImageId) {
		this.postImageId = postImageId;
	}

	public String getPostCaption() {
		return postCaption;
	}

	public void setPostCaption(String postCaption) {
		this.postCaption = postCaption;
	}

	public String getLike() {
		return like;
	}

	public void setLike(String like) {
		this.like = like;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public postEntity(Long postId, String userId, String userName, String postImageId, String postCaption, String like,
			String comments) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.userName = userName;
		this.postImageId = postImageId;
		this.postCaption = postCaption;
		this.like = like;
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "postEntity [postId=" + postId + ", userId=" + userId + ", userName=" + userName + ", postImageId="
				+ postImageId + ", postCaption=" + postCaption + ", like=" + like + ", comments=" + comments + "]";
	}

	public postEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

}
