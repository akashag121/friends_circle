package com.socialmedia.friendscirclebackend.model;

public class updatePostRequest {

	private String postCaption;
	private String postImageId;
	private String like;
	private String comments;
	private String userId;
	private String userName;
	
	
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
	public String getPostCaption() {
		return postCaption;
	}
	public void setPostCaption(String postCaption) {
		this.postCaption = postCaption;
	}
	public String getPostImageId() {
		return postImageId;
	}
	public void setPostImageId(String postImageId) {
		this.postImageId = postImageId;
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

	public updatePostRequest(String postCaption, String postImageId, String like, String comments, String userId,
			String userName) {
		super();
		this.postCaption = postCaption;
		this.postImageId = postImageId;
		this.like = like;
		this.comments = comments;
		this.userId = userId;
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "updatePostRequest [postCaption=" + postCaption + ", postImageId=" + postImageId + ", like=" + like
				+ ", comments=" + comments + ", userId=" + userId + ", userName=" + userName + "]";
	}
	public updatePostRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
