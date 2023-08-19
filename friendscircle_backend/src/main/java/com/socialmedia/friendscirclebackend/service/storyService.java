package com.socialmedia.friendscirclebackend.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialmedia.friendscirclebackend.dao.postDao;
import com.socialmedia.friendscirclebackend.dao.storyDao;
import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.entity.storyEntity;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.addStoryRequest;
import com.socialmedia.friendscirclebackend.model.getAllFriendReqResponse;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;

@Service
@Transactional
@org.springframework.transaction.annotation.Transactional
public class storyService {

	@Autowired
	public storyDao storydao;
	
	@Autowired
	public friendService friendservice;

	public List<storyEntity> getAllStoriesByUserIdServ(String user_id) {
		return this.storydao.getAllStoriesByUserId(user_id);
	}
	
	public List<storyEntity> getAllStoriesInDescOrderOfDates24HrsServ() {
		return this.storydao.getAllStoriesInDescendingOrderOfDate24Hrs();
	}
	
	public List<storyEntity> getAllStoriesByUserIdsInDescOrderOfDates24HrsServ(String user_id) {
		
		List<getAllFriendReqResponse> friendsResponse = friendservice.getAllFriendsByUserIdServ(user_id);
		List<String> friendIdsList = new ArrayList<>();
		friendsResponse.stream().forEach(friend->{
			friendIdsList.add(friend.getFriendId());
		});
		System.out.println("userId got"+ user_id);
		System.out.println("friendIdsList got"+ friendIdsList);
		return this.storydao.getAllStoriesByUserIdsInDescendingOrderOfDate24Hrs(friendIdsList);
	}

	public storyEntity addNewStoryServ(addStoryRequest storyRequest) {
		storyEntity se = new storyEntity();
		se.setUserId(storyRequest.getUserId());
		se.setUserName(storyRequest.getUserName());
		se.setStoryImageId(storyRequest.getStoryImageId());
		se.setStoryCaption(storyRequest.getStoryCaption());
		

		return this.storydao.save(se);
	}
//

}
