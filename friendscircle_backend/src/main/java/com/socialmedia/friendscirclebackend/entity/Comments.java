package com.socialmedia.friendscirclebackend.entity;

import java.util.ArrayList;
import java.util.List;

public class Comments {
	 private List<Comment> comments = new ArrayList<Comment>();
	    public List<Comment> getComments() {
	        return comments;
	    }
	    public void setComments(List<Comment> comments) {
	        this.comments = comments;
	    }
}
