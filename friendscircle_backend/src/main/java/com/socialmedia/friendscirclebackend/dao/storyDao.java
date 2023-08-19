package com.socialmedia.friendscirclebackend.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.entity.postEntity;
import com.socialmedia.friendscirclebackend.entity.storyEntity;

@Repository
public interface storyDao extends JpaRepository<storyEntity, Long> {

	@Query("select se from storyEntity se where se.userId= ?1")
	public List<storyEntity> getAllStoriesByUserId(String userId);

	@Query("select se from storyEntity se where datediff(now(), se.createdDate)<=1 order by se.createdDate desc")
	public List<storyEntity> getAllStoriesInDescendingOrderOfDate24Hrs();

	// for home page, getting posts of all friends of user
	@Query("select se from storyEntity se where se.userId in ?1 and datediff(now(), se.createdDate)<=1 order by se.createdDate desc")
	public List<storyEntity> getAllStoriesByUserIdsInDescendingOrderOfDate24Hrs(List<String> userIdsList);
	
//	@Query("insert into postEntity")
//	public List<postEntity> getAllPostsByUserId(String userId);
}
