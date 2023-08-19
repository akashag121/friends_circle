package com.socialmedia.friendscirclebackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.socialmedia.friendscirclebackend.config.Use;


@Repository
public interface UserRepo extends JpaRepository<Use,Long> {
    Use findByUserName(String username);
}