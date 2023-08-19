package com.socialmedia.friendscirclebackend.model;

public class getAllFriendReqResponse {
	private String FriendId;
	private String FriendName;
	private String FriendImageId;
	public String getFriendId() {
		return FriendId;
	}
	public void setFriendId(String friendId) {
		FriendId = friendId;
	}
	public String getFriendName() {
		return FriendName;
	}
	public void setFriendName(String friendName) {
		FriendName = friendName;
	}
	public String getFriendImageId() {
		return FriendImageId;
	}
	public void setFriendImageId(String friendImageId) {
		FriendImageId = friendImageId;
	}
	public getAllFriendReqResponse(String friendId, String friendName, String friendImageId) {
		super();
		FriendId = friendId;
		FriendName = friendName;
		FriendImageId = friendImageId;
	}
	public getAllFriendReqResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "getAllFriendReqResponse [FriendId=" + FriendId + ", FriendName=" + FriendName + ", FriendImageId="
				+ FriendImageId + "]";
	}

	
}
