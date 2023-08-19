package com.socialmedia.friendscirclebackend.entity;

import java.util.List;

public class Like {

	private List<String> likes;

	public void setLikes(List<String> likes) {
		this.likes = likes;
	}

	public List<String> getLikes() {
		return this.likes;
	}

	public Like(List<String> likes) {
		super();
		this.likes = likes;
	}

	@Override
	public String toString() {
		return "Like [likes=" + likes + "]";
	}

	public Like() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
