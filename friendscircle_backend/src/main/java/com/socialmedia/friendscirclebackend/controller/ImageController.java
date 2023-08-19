package com.socialmedia.friendscirclebackend.controller;

import java.io.IOException;
//import java.net.http.HttpHeaders;
//import java.net.http.HttpHeaders;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.socialmedia.friendscirclebackend.dao.ImageRepository;
import com.socialmedia.friendscirclebackend.entity.ImageEntity;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping("/upload")
    public ResponseEntity<Long> uploadImage(@RequestParam("file") MultipartFile file
                                             ) {
        try {
            ImageEntity imageEntity = new ImageEntity();
//            imageEntity.setName(name);
            imageEntity.setImage(file.getBytes());
            System.out.println("Images entity"+ imageEntity);
            imageEntity = imageRepository.save(imageEntity);
            return ResponseEntity.ok(imageEntity.getId());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Optional<ImageEntity> imageOptional = imageRepository.findById(id);
        if (imageOptional.isPresent()) {
            ImageEntity imageEntity = imageOptional.get();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_JPEG); // Adjust content type based on your image type
            return new ResponseEntity<>(imageEntity.getImage(), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();  
        } 
    }
}
