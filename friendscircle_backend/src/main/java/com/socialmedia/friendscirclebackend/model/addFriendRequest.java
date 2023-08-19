package com.socialmedia.friendscirclebackend.model;

public class addFriendRequest {
	private String firstFriendId;
	private String firstFriendName;
	private String firstImageId;
	private String secondFriendId;
	private String secondFriendName;
	private String secondImageId;
	public String getFirstFriendId() {
		return firstFriendId;
	}
	public void setFirstFriendId(String firstFriendId) {
		this.firstFriendId = firstFriendId;
	}
	public String getFirstFriendName() {
		return firstFriendName;
	}
	public void setFirstFriendName(String firstFriendName) {
		this.firstFriendName = firstFriendName;
	}
	public String getFirstImageId() {
		return firstImageId;
	}
	public void setFirstImageId(String firstImageId) {
		this.firstImageId = firstImageId;
	}
	public String getSecondFriendId() {
		return secondFriendId;
	}
	public void setSecondFriendId(String secondFriendId) {
		this.secondFriendId = secondFriendId;
	}
	public String getSecondFriendName() {
		return secondFriendName;
	}
	public void setSecondFriendName(String secondFriendName) {
		this.secondFriendName = secondFriendName;
	}
	public String getSecondImageId() {
		return secondImageId;
	}
	public void setSecondImageId(String secondImageId) {
		this.secondImageId = secondImageId;
	}
	@Override
	public String toString() {
		return "addFriendRequest [firstFriendId=" + firstFriendId + ", firstFriendName=" + firstFriendName
				+ ", firstImageId=" + firstImageId + ", secondFriendId=" + secondFriendId + ", secondFriendName="
				+ secondFriendName + ", secondImageId=" + secondImageId + "]";
	}
	public addFriendRequest(String firstFriendId, String firstFriendName, String firstImageId, String secondFriendId,
			String secondFriendName, String secondImageId) {
		super();
		this.firstFriendId = firstFriendId;
		this.firstFriendName = firstFriendName;
		this.firstImageId = firstImageId;
		this.secondFriendId = secondFriendId;
		this.secondFriendName = secondFriendName;
		this.secondImageId = secondImageId;
	}
	public addFriendRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
