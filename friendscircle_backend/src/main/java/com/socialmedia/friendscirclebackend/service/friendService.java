package com.socialmedia.friendscirclebackend.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialmedia.friendscirclebackend.dao.friendDao;
import com.socialmedia.friendscirclebackend.dao.postDao;
import com.socialmedia.friendscirclebackend.dao.userDao;
import com.socialmedia.friendscirclebackend.entity.friendEntity;
import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.entity.userEntity;
import com.socialmedia.friendscirclebackend.model.addFriendRequest;
import com.socialmedia.friendscirclebackend.model.addPostRequest;
import com.socialmedia.friendscirclebackend.model.getAllFriendReqResponse;
import com.socialmedia.friendscirclebackend.model.getAllUsersForNetworkPage;
import com.socialmedia.friendscirclebackend.model.updatePostRequest;

@Service
@Transactional
@org.springframework.transaction.annotation.Transactional
public class friendService {

	@Autowired
	public friendDao frienddao;
	
	@Autowired
	public userDao userdao;

//	public List<postEntity> getAllPostsByUserIdServ(String user_id) {
//		return this.postdao.getAllPostsByUserId(user_id);
//	}
//	
//	public List<postEntity> getAllPostsInDescOrderOfDatesServ() {
//		return this.postdao.getAllPostsInDescendingOrderOfDate();
//	}

	public friendEntity addNewFriendRequestServ(addFriendRequest addFriendRequest) {
		friendEntity fe = new friendEntity();
		fe.setFirstFriendId(addFriendRequest.getFirstFriendId());
		fe.setFirstFriendName(addFriendRequest.getFirstFriendName());
		fe.setFirstImageId(addFriendRequest.getFirstImageId());
		fe.setSecondFriendId(addFriendRequest.getSecondFriendId());
		fe.setSecondFriendName(addFriendRequest.getSecondFriendName());
		fe.setSecondImageId(addFriendRequest.getSecondImageId());
		fe.setStatus("pending");
		return this.frienddao.save(fe);
	}

//	public void updatePostServ(Long postId, updatePostRequest updatePostRequest) {
////		postEntity existingPost =  this.postdao.findById(postId).get();
//		System.out.println("update post request " + updatePostRequest);
//		postEntity pe = new postEntity();
//		pe.setPostId(postId);
//		pe.setPostCaption(updatePostRequest.getPostCaption());
//		pe.setPostImageId(updatePostRequest.getPostImageId());
//		pe.setLike(updatePostRequest.getLike());
//		pe.setComments(updatePostRequest.getComments());
//		pe.setUserId(updatePostRequest.getUserId());
//		pe.setUserName(updatePostRequest.getUserName());
//		pe.setCreatedDate(new Date());
//		this.postdao.save(pe);
//	}
//
	public List<getAllFriendReqResponse> getAllFriendReqByUserIdServ( String userId) {
		List<friendEntity> listOfFriendEntity =  this.frienddao.getAllFriendReqByUserId(userId);
		List<getAllFriendReqResponse> listOfFriendReqResp = new ArrayList<>();
		for (friendEntity friendEntity : listOfFriendEntity) {
			getAllFriendReqResponse friendReqResp = new getAllFriendReqResponse();
			friendReqResp.setFriendId(friendEntity.getFirstFriendId());
			friendReqResp.setFriendName(friendEntity.getFirstFriendName());
			friendReqResp.setFriendImageId(friendEntity.getFirstImageId());
			listOfFriendReqResp.add(friendReqResp);
		}
		
		return listOfFriendReqResp;
	}
	
	
	public List<getAllFriendReqResponse> getAllPendingFrndReqByUserIdServ( String userId) {
		List<friendEntity> listOfFriendEntity =  this.frienddao.getAllPendingFrndReqByUserId(userId);
		List<getAllFriendReqResponse> listOfPendingFriendReqResp = new ArrayList<>();
		for (friendEntity friendEntity : listOfFriendEntity) {
			getAllFriendReqResponse friendReqResp = new getAllFriendReqResponse();
			friendReqResp.setFriendId(friendEntity.getSecondFriendId());
			friendReqResp.setFriendName(friendEntity.getSecondFriendName());
			friendReqResp.setFriendImageId(friendEntity.getSecondImageId());
			listOfPendingFriendReqResp.add(friendReqResp);
		}
		
		return listOfPendingFriendReqResp;
	}
	
	public List<getAllFriendReqResponse> getAllFriendsByUserIdServ(String userId) {
		List<friendEntity> listOfFriendEntity =  this.frienddao.getAllFriendsByUserId(userId);
		List<getAllFriendReqResponse> listOfFriendReqResp = new ArrayList<>();
		for (friendEntity friendEntity : listOfFriendEntity) {
			getAllFriendReqResponse friendReqResp = new getAllFriendReqResponse();
			if(friendEntity.getFirstFriendId().equalsIgnoreCase(userId)) {
				friendReqResp.setFriendId(friendEntity.getSecondFriendId());
				friendReqResp.setFriendName(friendEntity.getSecondFriendName());
				friendReqResp.setFriendImageId(friendEntity.getSecondImageId());
			}
			else if(friendEntity.getSecondFriendId().equalsIgnoreCase(userId)) {
				friendReqResp.setFriendId(friendEntity.getFirstFriendId());
				friendReqResp.setFriendName(friendEntity.getFirstFriendName());
				friendReqResp.setFriendImageId(friendEntity.getFirstImageId());
			}
			
			listOfFriendReqResp.add(friendReqResp);
		}
		
		return listOfFriendReqResp;
	}
	
	
	public List<getAllUsersForNetworkPage> getAllActiveUsersForNetworkPageServ(String userId) {
		
		List<userEntity> listOfAllActiveUsers = this.userdao.getAllActiveUsers();
		List<getAllFriendReqResponse> listOfAllFriends =   getAllFriendsByUserIdServ(userId);
		List<getAllFriendReqResponse> listOfPendingFriendReq =   getAllPendingFrndReqByUserIdServ(userId);
		List<getAllFriendReqResponse> listOfFriendReq =    getAllFriendReqByUserIdServ(userId);
		listOfAllFriends.addAll(listOfPendingFriendReq);
		listOfAllFriends.addAll(listOfFriendReq);
		
		//for excluding the self user
		getAllFriendReqResponse selfUser = new getAllFriendReqResponse();
		selfUser.setFriendId(userId);
		selfUser.setFriendImageId("");
		selfUser.setFriendName("");
		listOfAllFriends.add(selfUser);
		List<getAllUsersForNetworkPage> AllActiveUsersForNetworkPage = new ArrayList<>();
		int count = -1;
		for (userEntity activeUser : listOfAllActiveUsers) {
			count = 0;
			for (int i = 0; i < listOfAllFriends.size(); i++) {
				if(listOfAllFriends.get(i).getFriendId().equalsIgnoreCase(String.valueOf(activeUser.getUserId()))) {
					count=1;
					break;
				}
			}
			if(count==0) {
				getAllUsersForNetworkPage activeUserObject = new getAllUsersForNetworkPage();
				activeUserObject.setUserId(String.valueOf(activeUser.getUserId()));
				activeUserObject.setUserName(activeUser.getFullName());
				activeUserObject.setUserImageId(activeUser.getImageId());
				AllActiveUsersForNetworkPage.add(activeUserObject);
			}
		}

		
		return AllActiveUsersForNetworkPage;
	}

	
	
	public void acceptFriendRequestServ(String friendId, String userId) {

		this.frienddao.acceptFriendRequest(friendId, userId);
	}
	
	public void deleteFriendRequestServ(String friendId, String userId) {

		this.frienddao.deleteFriendRequest(friendId, userId);
	}
	
	public void unfriendAFriendRequestServ(String friendId, String userId) {

		this.frienddao.unfriendAFriendRequest(friendId, userId);
	}
//
//	public String getCommentsServ(Long postId) {
//
//		return this.postdao.findCommentsByPostId(postId);
//	}
//
//	public void setCommentsServ(Long postId, String commentsRequest) {
//
//		this.postdao.setCommentsByPostId(postId, commentsRequest);
//	}

}
