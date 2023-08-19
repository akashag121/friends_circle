package com.socialmedia.friendscirclebackend.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.socialmedia.friendscirclebackend.dao.postDao;
import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.getAllFriendReqResponse;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;

@Service
@Transactional
@org.springframework.transaction.annotation.Transactional
public class postService {

	@Autowired
	public postDao postdao;
	
	@Autowired
	public friendService friendservice;

	public List<postEntity> getAllPostsByUserIdServ(String user_id) {
		return this.postdao.getAllPostsByUserId(user_id);
	}
	
	public List<postEntity> getAllPostsInDescOrderOfDatesServ() {
		return this.postdao.getAllPostsInDescendingOrderOfDate();
	}
	
	
	public List<postEntity> getAllPostsByUserIdsInDescOrderOfDatesServ(String user_id) {
		
		List<getAllFriendReqResponse> friendsResponse = friendservice.getAllFriendsByUserIdServ(user_id);
		List<String> friendIdsList = new ArrayList<>();
		friendsResponse.stream().forEach(friend->{
			friendIdsList.add(friend.getFriendId());
		});
		System.out.println("userId got"+ user_id);
		System.out.println("friendIdsList got"+ friendIdsList);
		return this.postdao.getAllPostsByUserIdsInDescendingOrderOfDate(friendIdsList);
	}
	
	public postEntity addNewPostServ(addPostRequest postRequest) {
		postEntity ue = new postEntity();
		ue.setUserId(postRequest.getUserId());
		ue.setUserName(postRequest.getUserName());
		ue.setPostImageId(postRequest.getPostImageId());
		ue.setPostCaption(postRequest.getPostCaption());
		ue.setLike(postRequest.getLikes());
		ue.setComments(postRequest.getComments());

		return this.postdao.save(ue);
	}

	public void updatePostServ(Long postId, updatePostRequest updatePostRequest) {
//		postEntity existingPost =  this.postdao.findById(postId).get();
		System.out.println("update post request " + updatePostRequest);
		postEntity pe = new postEntity();
		pe.setPostId(postId);
		pe.setPostCaption(updatePostRequest.getPostCaption());
		pe.setPostImageId(updatePostRequest.getPostImageId());
		pe.setLike(updatePostRequest.getLike());
		pe.setComments(updatePostRequest.getComments());
		pe.setUserId(updatePostRequest.getUserId());
		pe.setUserName(updatePostRequest.getUserName());
		pe.setCreatedDate(new Date());
		this.postdao.save(pe);
	}

	
	public void deletePostServ(Long postId) {

		this.postdao.deletePostByPostId(postId);
	}

	
	public postEntity getPostByPostIdServ(Long postId) {
		return this.postdao.findById(postId).get();
	}

	public String getLikesServ(Long postId) {

		return this.postdao.findLikesByPostId(postId);
	}

	public void setLikesServ(Long postId, String likesRequest) {

		this.postdao.setLikesByPostId(postId, likesRequest);
	}

	public String getCommentsServ(Long postId) {

		return this.postdao.findCommentsByPostId(postId);
	}

	public void setCommentsServ(Long postId, String commentsRequest) {

		this.postdao.setCommentsByPostId(postId, commentsRequest);
	}

}
