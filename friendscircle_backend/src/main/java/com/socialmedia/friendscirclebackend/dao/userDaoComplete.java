package com.socialmedia.friendscirclebackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.entity.userEntity;
import com.socialmedia.friendscirclebackend.entity.userEntityComplete;

@Repository
public interface userDaoComplete extends JpaRepository<userEntityComplete, Long>{

	

	@Query("select ue from userEntityComplete ue where ue.userId=?1 ")
	public userEntityComplete findUserByUserIdCompleteData(Long userId);
	

}
