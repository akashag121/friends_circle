package com.socialmedia.friendscirclebackend.model;

public class getAllUsersForNetworkPage {
	private String userId;
	private String userName;
	private String userImageId;
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
	public String getUserImageId() {
		return userImageId;
	}
	public void setUserImageId(String userImageId) {
		this.userImageId = userImageId;
	}
	public getAllUsersForNetworkPage(String userId, String userName, String userImageId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userImageId = userImageId;
	}
	public getAllUsersForNetworkPage() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "getAllUsersForNetworkPage [userId=" + userId + ", userName=" + userName + ", userImageId=" + userImageId
				+ "]";
	}

	
}
