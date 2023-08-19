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
import com.socialmedia.friendscirclebackend.entity.storyEntity;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.addStoryRequest;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;
import com.socialmedia.friendscirclebackend.service.postService;
import com.socialmedia.friendscirclebackend.service.storyService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/stories")
public class storyController {

	@Autowired
	public storyService storyservice;

	@GetMapping("/getAllStoriesByUserId/{userId}")
	public List<storyEntity> getAllStoriesByUserIdCont(@PathVariable String userId) {
		return storyservice.getAllStoriesByUserIdServ(userId);
	}
	
	@GetMapping("/getAllStoriesInDescOrderOfDates24Hrs")
	public List<storyEntity> getAllStoriesInDescOrderOfDates24HrsCont() {
		return storyservice.getAllStoriesInDescOrderOfDates24HrsServ();
	}
	
	@GetMapping("/getAllStoriesByUserIdsInDescOrderOfDates24Hrs/{userId}")
	public List<storyEntity> getAllStoriesByUserIdsInDescOrderOfDates24HrsCont(@PathVariable String userId) {
		return storyservice.getAllStoriesByUserIdsInDescOrderOfDates24HrsServ(userId);
	}
	
	@PostMapping("/addNewStory")
	public storyEntity addNewStoryCont(@RequestBody addStoryRequest storyRequest) {
		return storyservice.addNewStoryServ(storyRequest);
	}


}