package com.socialmedia.friendscirclebackend.model;

public class addPostRequest {

	private String userId;
	private String userName;
	private String postCaption;
	private String postImageId;
	private String likes;
	private String comments;
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
	public String getLikes() {
		return likes;
	}
	public void setLikes(String likes) {
		this.likes = likes;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public addPostRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "addPostRequest [userId=" + userId + ", userName=" + userName + ", postCaption=" + postCaption
				+ ", postImageId=" + postImageId + ", likes=" + likes + ", comments=" + comments + "]";
	}
	public addPostRequest(String userId, String userName, String postCaption, String postImageId, String likes,
			String comments) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.postCaption = postCaption;
		this.postImageId = postImageId;
		this.likes = likes;
		this.comments = comments;
	}
	
	
}
