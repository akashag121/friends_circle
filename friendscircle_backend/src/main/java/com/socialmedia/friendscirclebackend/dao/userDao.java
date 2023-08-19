package com.socialmedia.friendscirclebackend.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.entity.userEntity;

@Repository
public interface userDao extends JpaRepository<userEntity, Long>{

	@Query("select ue from userEntity ue where ue.isActive=1 ")
	public List<userEntity> getAllActiveUsers();
	
	@Query("select ue from userEntity ue where ue.isActive=0 ")
	public List<userEntity> getAllInactiveUsers();
	
	@Query("select ue from userEntity ue where ue.userId=?1 ")
	public userEntity findUserByUserId(Long userId);
	
	@Query("update userEntity ue set ue.isActive=false where ue.userId=?1 ")
	@Modifying
	@Transactional
	public void blockUser(Long userId);
	
	@Query("update userEntity ue set ue.isActive=true where ue.userId=?1 ")
	@Modifying
	@Transactional
	public void unblockUser(Long userId);
}
