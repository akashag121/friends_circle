package com.socialmedia.friendscirclebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;
import com.socialmedia.friendscirclebackend.service.postService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/posts")
public class postController {

	@Autowired
	public postService postservice;

	@GetMapping("/getAllPostsByUserId/{userId}")
	public List<postEntity> getAllPostsByUserIdCont(@PathVariable String userId) {
		return postservice.getAllPostsByUserIdServ(userId);
	}
	
	@GetMapping("/getAllPostsInDescOrderOfDates")
	public List<postEntity> getAllPostsInDescOrderOfDatesCont() {
		return postservice.getAllPostsInDescOrderOfDatesServ();
	}
	
	@GetMapping("/getAllPostsByUserIdsInDescOrderOfDates/{userId}")
	public List<postEntity> getAllPostsByUserIdsInDescOrderOfDatesCont(@PathVariable String userId) {
		return postservice.getAllPostsByUserIdsInDescOrderOfDatesServ(userId);
	}
	
	@PostMapping("/addNewPost")
	public postEntity addNewPostCont(@RequestBody addPostRequest postRequest) {
		return postservice.addNewPostServ(postRequest);
	}

	@PutMapping("/updatePost/{postId}")
	public void updatePostCont( @PathVariable Long postId ,@RequestBody updatePostRequest postUpdateRequest)
	{
		this.postservice.updatePostServ(postId,postUpdateRequest);
	}
	
	@PutMapping("/deletePost/{postId}")
	public void deletePostCont( @PathVariable Long postId)
	{
		this.postservice.deletePostServ(postId);
	}
	
	@GetMapping("/getPostByPostId/{postId}")
	public postEntity getPostByPostIdCont(@PathVariable Long postId) {
		return postservice.getPostByPostIdServ(postId);
	}
	
	@GetMapping("/getLikes/{postId}")
	public String getLikesCont(@PathVariable Long postId)
	{
		return postservice.getLikesServ(postId);
	}
	
	@PutMapping("/setLikes/{postId}")
	public void setLikesCont(@PathVariable Long postId, @RequestBody String likesRequest)
	{
		 postservice.setLikesServ(postId,likesRequest);
	}
	
	@GetMapping("/getComments/{postId}")
	public String getCommentsCont(@PathVariable Long postId)
	{
		return postservice.getCommentsServ(postId);
	}
	
	@PutMapping("/setComments/{postId}")
	public void setCommentsCont(@PathVariable Long postId, @RequestBody String commentsRequest)
	{
		 postservice.setCommentsServ(postId,commentsRequest);
	}
//	@GetMapping("/getAllInactiveUsers")
//	public List<userEntity> getAllInactiveUsersCont() {
//		return userservice.getAllInactiveUsersServ();
//	}
	

}