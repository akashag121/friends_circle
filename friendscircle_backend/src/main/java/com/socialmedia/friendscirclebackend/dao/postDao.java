package com.socialmedia.friendscirclebackend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.entity.postEntity;


@Repository
public interface postDao  extends JpaRepository<postEntity, Long>{

	@Query("select pe from postEntity pe where pe.userId= ?1")
	public List<postEntity> getAllPostsByUserId(String userId);

	@Query("select pe.like from postEntity pe where pe.postId=?1 ")
	public String findLikesByPostId(Long postId);

	@Modifying
	@Query("update postEntity pe set pe.like=?2 where pe.postId=?1 ")
	public void setLikesByPostId(Long postId, String likesRequest);
            	
	
	@Query("select pe.comments from postEntity pe where pe.postId=?1 ")
	public String findCommentsByPostId(Long postId);

	@Modifying
	@Query("update postEntity pe set pe.comments=?2 where pe.postId=?1 ")
	public void setCommentsByPostId(Long postId, String commentsRequest);

	@Query("select pe from postEntity pe order by pe.createdDate desc")
	public List<postEntity> getAllPostsInDescendingOrderOfDate();
	
	//for home page, getting posts of all friends of user
	@Query("select pe from postEntity pe where pe.userId in ?1 order by pe.createdDate desc")
	public List<postEntity> getAllPostsByUserIdsInDescendingOrderOfDate(List<String> userIdsList);
	
	@Modifying
	@Query("delete from postEntity pe where pe.postId=?1 ")
	public void deletePostByPostId(Long postId);

//	@Query("insert into postEntity")
//	public List<postEntity> getAllPostsByUserId(String userId);
}
