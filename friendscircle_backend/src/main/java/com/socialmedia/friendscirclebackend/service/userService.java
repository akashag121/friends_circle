package com.socialmedia.friendscirclebackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.socialmedia.friendscirclebackend.dao.userDao;
import com.socialmedia.friendscirclebackend.dao.userDaoComplete;
import com.socialmedia.friendscirclebackend.entity.userEntity;
import com.socialmedia.friendscirclebackend.entity.userEntityComplete;

@Service
public class userService {

	@Autowired
	public userDao userdao;
	
	@Autowired
	public userDaoComplete userdaocompl;

	public List<userEntity> getAllActiveUsersServ() {
		return this.userdao.getAllActiveUsers();
	}
	
	public List<userEntity> getAllInactiveUsersServ() {
		return this.userdao.getAllInactiveUsers();
	}
	
	public userEntity findUserByUserIdServ(Long userId) {
		return this.userdao.findUserByUserId(userId);
	}
	
	public userEntityComplete findUserByUserIdCompleteDataServ(Long userId) {
		return this.userdaocompl.findUserByUserIdCompleteData(userId);
	}
	
	public void blockUserServ(Long userId) {
		this.userdao.blockUser(userId);
	}
	
	public void unblockUserServ(Long userId) {
		this.userdao.unblockUser(userId);
	}
}
