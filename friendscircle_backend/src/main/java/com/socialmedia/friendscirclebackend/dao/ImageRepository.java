package com.socialmedia.friendscirclebackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.socialmedia.friendscirclebackend.entity.ImageEntity;


public interface ImageRepository extends JpaRepository<ImageEntity, Long> {
}
