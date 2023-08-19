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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.socialmedia.friendscirclebackend.dao.userDao;
import com.socialmedia.friendscirclebackend.entity.friendEntity;
import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.model.addFriendRequest;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.getAllFriendReqResponse;
import com.socialmedia.friendscirclebackend.model.getAllUsersForNetworkPage;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;
import com.socialmedia.friendscirclebackend.service.friendService;
import com.socialmedia.friendscirclebackend.service.postService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/friends")
public class friendController {

	@Autowired
	public friendService friendservice;
	
	@Autowired
	public userDao userdao;

//	@GetMapping("/getAllPostsByUserId/{userId}")
//	public List<postEntity> getAllPostsByUserIdCont(@PathVariable String userId) {
//		return postservice.getAllPostsByUserIdServ(userId);
//	}
//	
//	@GetMapping("/getAllPostsInDescOrderOfDates")
//	public List<postEntity> getAllPostsInDescOrderOfDatesCont() {
//		return postservice.getAllPostsInDescOrderOfDatesServ();
//	}
	
	@PostMapping("/addNewFriendRequest")
	public friendEntity addNewFriendRequestCont(@RequestBody addFriendRequest addFriendRequest) {
		return friendservice.addNewFriendRequestServ(addFriendRequest);
	}

//	@PutMapping("/updatePost/{postId}")
//	public void updatePostCont( @PathVariable Long postId ,@RequestBody updatePostRequest postUpdateRequest)
//	{
//		this.postservice.updatePostServ(postId,postUpdateRequest);
//	}
//	
	@GetMapping("/getAllFriendRequestByUserId/{userId}")
	public List<getAllFriendReqResponse> getAllFriendReqByUserIdCont(@PathVariable String userId) {
		return friendservice.getAllFriendReqByUserIdServ(userId);
	}
	
	@GetMapping("/getAllPendingFriendRequestByUserId/{userId}")
	public List<getAllFriendReqResponse> getAllPendingFrndReqByUserIdCont(@PathVariable String userId) {
		return friendservice.getAllPendingFrndReqByUserIdServ(userId);
	}
	
	@GetMapping("/getAllFriendsByUserId/{userId}")
	public List<getAllFriendReqResponse> getAllFriendsByUserIdCont(@PathVariable String userId) {
		return friendservice.getAllFriendsByUserIdServ(userId);
	}
	
	@GetMapping("/getAllActiveUsersForNetworkPage/{userId}")
	public List<getAllUsersForNetworkPage> getAllActiveUsersForNetworkPageCont(@PathVariable String userId) {
		return friendservice.getAllActiveUsersForNetworkPageServ(userId);
	}

	
	@PutMapping("/acceptFriendRequest")
	public void acceptFriendRequestCont(@RequestParam(name = "friendId") String friendId, @RequestParam(name = "userId") String userId)
	{
		friendservice.acceptFriendRequestServ(friendId,userId);
	}
	
	@PutMapping("/deleteFriendRequest")
	public void deleteFriendRequestCont(@RequestParam(name = "friendId") String friendId, @RequestParam(name = "userId") String userId)
	{
		friendservice.deleteFriendRequestServ(friendId,userId);
	}
	
	@PutMapping("/unfriendAFriendRequest")
	public void unfriendAFriendRequestCont(@RequestParam(name = "friendId") String friendId, @RequestParam(name = "userId") String userId)
	{
		friendservice.unfriendAFriendRequestServ(friendId,userId);
	}

	

}