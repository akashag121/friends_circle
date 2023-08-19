package com.socialmedia.friendscirclebackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

@Entity
@Table(name = "friends")
@Transactional
@org.springframework.transaction.annotation.Transactional
public class friendEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "sno")
	private Long sno;

	@Column(name = "first_Friend_Id")
	private String firstFriendId;

	@Column(name = "first_Friend_Name")
	private String firstFriendName;

	@Column(name = "second_Friend_Id")
	private String secondFriendId;

	@Column(name = "second_Friend_Name")
	private String secondFriendName;

	@Column(name = "first_Image_Id")
	private String firstImageId;

	@Column(name = "second_Image_Id")
	private String secondImageId;
	
	@Column(name = "status")
	private String status;

	public Long getSno() {
		return sno;
	}

	public void setSno(Long sno) {
		this.sno = sno;
	}

	public String getFirstFriendId() {
		return firstFriendId;
	}

	public void setFirstFriendId(String firstFriendId) {
		this.firstFriendId = firstFriendId;
	}

	public String getFirstFriendName() {
		return firstFriendName;
	}

	public void setFirstFriendName(String firstFriendName) {
		this.firstFriendName = firstFriendName;
	}

	public String getSecondFriendId() {
		return secondFriendId;
	}

	public void setSecondFriendId(String secondFriendId) {
		this.secondFriendId = secondFriendId;
	}

	public String getSecondFriendName() {
		return secondFriendName;
	}

	public void setSecondFriendName(String secondFriendName) {
		this.secondFriendName = secondFriendName;
	}

	public String getFirstImageId() {
		return firstImageId;
	}

	public void setFirstImageId(String firstImageId) {
		this.firstImageId = firstImageId;
	}

	public String getSecondImageId() {
		return secondImageId;
	}

	public void setSecondImageId(String secondImageId) {
		this.secondImageId = secondImageId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "friendEntity [sno=" + sno + ", firstFriendId=" + firstFriendId + ", firstFriendName=" + firstFriendName
				+ ", secondFriendId=" + secondFriendId + ", secondFriendName=" + secondFriendName + ", firstImageId="
				+ firstImageId + ", secondImageId=" + secondImageId + ", status=" + status + "]";
	}

	public friendEntity(Long sno, String firstFriendId, String firstFriendName, String secondFriendId,
			String secondFriendName, String firstImageId, String secondImageId, String status) {
		super();
		this.sno = sno;
		this.firstFriendId = firstFriendId;
		this.firstFriendName = firstFriendName;
		this.secondFriendId = secondFriendId;
		this.secondFriendName = secondFriendName;
		this.firstImageId = firstImageId;
		this.secondImageId = secondImageId;
		this.status = status;
	}

	public friendEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
