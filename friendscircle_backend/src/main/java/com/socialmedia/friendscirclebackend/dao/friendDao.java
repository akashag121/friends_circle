package com.socialmedia.friendscirclebackend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.entity.friendEntity;
import com.socialmedia.friendscirclebackend.entity.postEntity;


@Repository
public interface friendDao  extends JpaRepository<friendEntity, Long>{

	@Query("select fe from friendEntity fe where fe.secondFriendId= ?1 and fe.status='pending' ")
	public List<friendEntity> getAllFriendReqByUserId(String userId);
	
	@Query("select fe from friendEntity fe where (fe.secondFriendId= ?1 or fe.firstFriendId= ?1) and fe.status='friends' ")
	public List<friendEntity> getAllFriendsByUserId(String userId);
//
//	@Query("select pe.like from postEntity pe where pe.postId=?1 ")
//	public String findLikesByPostId(Long postId);
//
	
	@Query("select fe from friendEntity fe where fe.firstFriendId= ?1 and fe.status='pending' ")
	public List<friendEntity> getAllPendingFrndReqByUserId(String userId);
	
	
	@Modifying
	@Query("update friendEntity fe set fe.status='friends' where fe.firstFriendId=?1 and fe.secondFriendId=?2")
	public void acceptFriendRequest(String friendId, String userId);
	
	@Modifying
	@Query("delete from friendEntity fe where fe.firstFriendId=?1 and fe.secondFriendId=?2")
	public void deleteFriendRequest(String friendId, String userId);
	
	@Modifying
	@Query("delete from friendEntity fe where (fe.firstFriendId=?1 and fe.secondFriendId=?2) or (fe.secondFriendId=?1 and fe.firstFriendId=?2) and fe.status='friends'")
	public void unfriendAFriendRequest(String friendId, String userId);
//            	
//	
//	@Query("select pe.comments from postEntity pe where pe.postId=?1 ")
//	public String findCommentsByPostId(Long postId);
//
//	@Modifying
//	@Query("update postEntity pe set pe.comments=?2 where pe.postId=?1 ")
//	public void setCommentsByPostId(Long postId, String commentsRequest);
//
//	@Query("select pe from postEntity pe order by pe.createdDate desc")
//	public List<postEntity> getAllPostsInDescendingOrderOfDate();
	

//	@Query("insert into postEntity")
//	public List<postEntity> getAllPostsByUserId(String userId);
}
