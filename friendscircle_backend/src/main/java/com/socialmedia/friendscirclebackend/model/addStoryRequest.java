package com.socialmedia.friendscirclebackend.model;

public class addStoryRequest {
	
	private String userId;
	private String userName;
	private String storyCaption;
	private String storyImageId;
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
	public String getStoryCaption() {
		return storyCaption;
	}
	public void setStoryCaption(String storyCaption) {
		this.storyCaption = storyCaption;
	}
	public String getStoryImageId() {
		return storyImageId;
	}
	public void setStoryImageId(String storyImageId) {
		this.storyImageId = storyImageId;
	}
	public addStoryRequest(String userId, String userName, String storyCaption, String storyImageId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.storyCaption = storyCaption;
		this.storyImageId = storyImageId;
	}
	public addStoryRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "addStoryRequest [userId=" + userId + ", userName=" + userName + ", storyCaption=" + storyCaption
				+ ", storyImageId=" + storyImageId + "]";
	}
	
	
}
