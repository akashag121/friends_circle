import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerNewUserReqModel } from '../models/registerUserRequestModel';
import { URLs } from '../configuration/config';
import { loginForm } from '../models/loginFormModel';
import { loginResponseModel } from 'src/app/models/loginResponseModel';
import { getAllPostsResponse } from '../models/getAllPostsRespModel';
import { getAllStoriesResponse } from '../models/getAllStoriesRespModel';
import { getAllFriendsResp } from '../models/getAllFriendsByUserIdRespModel';
import { pplYouMayKnowResponse } from '../models/getAllPplUMayKnowModel';
import { UserByUserId } from '../models/findUserByUserIdModel';
import { likeResponse } from '../models/likeResponse';
import { commentResp } from '../models/commentResponse';
import { addNewPostReq } from '../models/addNewPostReqModel';
import { addNewPostResp } from '../models/addNewPostRespModel';
import { findUserCompleteData } from '../models/findIUserCompleteModel';
import { addNewStoryReq } from '../models/addNewStoryReqModel';
import { addNewStoryResp } from '../models/addNewStoryRespModel';


@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  post!: getAllPostsResponse;

  constructor(private http: HttpClient) { }

  registerUrl: string = "";
  loginUrl: string = "";
  getAllPostsUrl: string = "";
  getAllPostsByUserIdUrl: string = "";
  getAllStoriesUrl: string = "";
  getAllStoriesByUserIdUrl: string = "";
  getAllFriendsUrl: string = "";
  getAllFriendRequestUrl: string = "";
  getAllPendingFriendRequestUrl: string = "";
  getAllPeopleYouMayKnowUrl: string = "";
  acceptFriendRequestUrl: string = "";
  rejectFriendRequestUrl: string = "";
  addNewFriendRequestUrl: string = "";
  unfriendAFriendUrl: string = "";
  findUserByUserIdUrl: string = "";
  findUserByUserIdCompleteDataUrl: string = "";
  setLikesByPostIdUrl: string = "";
  getLikesByPostIdUrl: string = "";
  setCommentsByPostIdUrl: string = "";
  getCommentsByPostIdUrl: string = "";
  uploadNewImageUrl: string = "";
  getImageFromDBUrl: string = "";
  addNewPostUrl: string = "";
  addNewStoryUrl: string = "";
  getAllActiveUsersUrl: string = "";
  getAllBlockedUsersUrl: string = "";
  blockUserByUserIdUrl: string = "";
  unblockUserByUserIdUrl: string = "";



  registerNewUser(user: registerNewUserReqModel) {
    this.registerUrl = URLs.registerURL;
    console.log("calling this endpoint ", this.registerUrl)
    console.log("Request payload", user)
    return this.http.post(this.registerUrl, user);
  }

  loginUser(user: loginForm) {
    this.loginUrl = URLs.loginURL;
    console.log("calling this endpoint ", this.loginUrl)
    console.log("Request payload", user)
    return this.http.post<loginResponseModel>(this.loginUrl, user);
  }

  getAllPostsByUserIds(userId: string) {
    this.getAllPostsUrl = URLs.getAllPostsByUserIdsURL;
    console.log("calling this endpoint ", this.getAllPostsUrl + userId)
    // const headers = new HttpHeaders();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb2hpdDEyIiwiZXhwIjoxNjkwODQxMDE3LCJpYXQiOjE2OTA4MDUwMTd9.-MOdwYe9wQO8tnEahvHBbAJnmxDpmCUH0H8HNWppM0g')
    return this.http.get<getAllPostsResponse[]>(this.getAllPostsUrl + userId);
  }

  getAllPostsByUserId(userId: string) {
    this.getAllPostsByUserIdUrl = URLs.getAllPostsByUserIdURL;
    console.log("calling this endpoint ", this.getAllPostsByUserIdUrl + userId)
    return this.http.get<getAllPostsResponse[]>(this.getAllPostsByUserIdUrl + userId);
  }

  getAllStoriesByUserIds(userId: string) {
    this.getAllStoriesUrl = URLs.getAllStoriesByUserIdsURL;
    console.log("calling this endpoint ", this.getAllStoriesUrl + userId)
    return this.http.get<getAllStoriesResponse[]>(this.getAllStoriesUrl + userId);
  }

  getAllStoriesByUserId(userId: string) {
    this.getAllStoriesByUserIdUrl = URLs.getAllStoriesByUserIdURL;
    console.log("calling this endpoint ", this.getAllStoriesByUserIdUrl + userId)
    return this.http.get<getAllStoriesResponse[]>(this.getAllStoriesByUserIdUrl + userId);
  }

  getAllFriendsByUserId(userId: string) {
    this.getAllFriendsUrl = URLs.getAllFriendsURL;
    console.log("calling this endpoint ", this.getAllFriendsUrl + userId)
    return this.http.get<getAllFriendsResp[]>(this.getAllFriendsUrl + userId);
  }

  getAllFriendRequestsByUserId(userId: string) {
    this.getAllFriendRequestUrl = URLs.getAllFriendRequestURL;
    console.log("calling this endpoint ", this.getAllFriendRequestUrl + userId)
    return this.http.get<getAllFriendsResp[]>(this.getAllFriendRequestUrl + userId);
  }

  getAllPendingFriendRequestsByUserId(userId: string) {
    this.getAllPendingFriendRequestUrl = URLs.getAllPendingFriendRequestURL;
    console.log("calling this endpoint ", this.getAllPendingFriendRequestUrl + userId)
    return this.http.get<getAllFriendsResp[]>(this.getAllPendingFriendRequestUrl + userId);
  }

  getAllPeopleYouMayKnowByUserId(userId: string) {
    this.getAllPeopleYouMayKnowUrl = URLs.getAllPeopleYouMayKnowURL;
    console.log("calling this endpoint ", this.getAllPeopleYouMayKnowUrl + userId)
    return this.http.get<pplYouMayKnowResponse[]>(this.getAllPeopleYouMayKnowUrl + userId);
  }

  acceptFriendRequest(userId: string, friendId: string) {
    this.acceptFriendRequestUrl = URLs.acceptFriendRequestURL;
    const endpoint = this.acceptFriendRequestUrl + 'friendId=' + friendId + '&userId=' + userId
    console.log("calling this endpoint ", endpoint)
    return this.http.put(endpoint, '');
  }

  rejectFriendRequest(userId: string, friendId: string) {
    this.rejectFriendRequestUrl = URLs.rejectFriendRequestURL;
    const endpoint = this.rejectFriendRequestUrl + 'friendId=' + friendId + '&userId=' + userId
    console.log("calling this endpoint ", endpoint)
    return this.http.put(endpoint, '');
  }

  addNewFriendRequest(firstFriendId: string, firstFriendName: string, firstImageId: string, secondFriendId: string, secondFriendName: string, secondImageId: string) {
    this.addNewFriendRequestUrl = URLs.addNewFriendRequestURL;
    console.log("calling this endpoint ", this.addNewFriendRequestUrl);
    // const userId = localStorage.getItem('currentuser');
    const requestPayload = {
      'firstFriendId': firstFriendId, 'firstFriendName': firstFriendName, 'firstImageId': firstImageId,
      'secondFriendId': secondFriendId, 'secondFriendName': secondFriendName, 'secondImageId': secondImageId
    }
    console.log("Request payload", requestPayload)
    return this.http.post(this.addNewFriendRequestUrl, requestPayload);
  }

  unfriendAFriend(userId: string, friendId: string) {
    this.unfriendAFriendUrl = URLs.unfriendAFriendURL;
    const endpoint = this.unfriendAFriendUrl + 'friendId=' + friendId + '&userId=' + userId
    console.log("calling this endpoint ", endpoint)
    return this.http.put(endpoint, '');
  }

  findUserByUserId(userId: string) {
    this.findUserByUserIdUrl = URLs.findUserByUserIdURL;
    console.log("calling this endpoint ", this.findUserByUserIdUrl + userId)
    return this.http.get<UserByUserId>(this.findUserByUserIdUrl + userId);
  }

  findUserByUserIdCompleteData(userId: string) {
    this.findUserByUserIdCompleteDataUrl = URLs.findUserByUserIdCompleteDataURL;
    console.log("calling this endpoint ", this.findUserByUserIdCompleteDataUrl + userId)
    return this.http.get<findUserCompleteData>(this.findUserByUserIdCompleteDataUrl + userId);
  }

  setLikesByPostId(postId: string, likeResp: likeResponse) {
    this.setLikesByPostIdUrl = URLs.setLikesByPostIdURL;
    const endpoint = this.setLikesByPostIdUrl + postId;
    console.log("calling this endpoint ", endpoint)
    console.log("calling this endpoint ", JSON.stringify(likeResp))
    let json = JSON.stringify(likeResp);
    console.log("calling this endpoint ", json)

    return this.http.put(this.setLikesByPostIdUrl + postId, json);
  }

  getLikesByPostId(postId: string) {
    this.getLikesByPostIdUrl = URLs.getLikesByPostIdURL;
    const endpoint = this.getLikesByPostIdUrl + postId;
    console.log("calling this endpoint ", endpoint)
    return this.http.get<likeResponse>(this.getLikesByPostIdUrl + postId);
  }

  setCommentsByPostId(postId: string, commentResp: commentResp) {
    this.setCommentsByPostIdUrl = URLs.setCommentsByPostIdURL;
    const endpoint = this.setCommentsByPostIdUrl + postId;
    console.log("calling this endpoint ", endpoint)
    console.log("calling this endpoint ", JSON.stringify(commentResp))
    let json = JSON.stringify(commentResp);
    console.log("calling this endpoint ", json)

    return this.http.put(endpoint, json);
  }

  getCommentsByPostId(postId: string) {
    this.getCommentsByPostIdUrl = URLs.getCommentsByPostIdURL;
    const endpoint = this.getCommentsByPostIdUrl + postId;
    console.log("calling this endpoint ", endpoint)
    return this.http.get<commentResp>(endpoint);
  }

  uploadNewImage(formData: FormData) {
    this.uploadNewImageUrl = URLs.uploadNewImageURL;
    console.log("calling this endpoint ", this.uploadNewImageUrl);
    console.log('request payload', formData);
    return this.http.post<number>(this.uploadNewImageUrl, formData);
  }

  getImageFromDB(imageId: string) {
    this.getImageFromDBUrl = URLs.getImageFromDBURL;
    const endpoint = this.getImageFromDBUrl + imageId;
    console.log("calling this endpoint ", endpoint)
    return this.http.get(endpoint, { responseType: 'blob' });
  }

  addNewPost(addNewPostPayload: addNewPostReq) {
    this.addNewPostUrl = URLs.addNewPostURL;
    console.log("calling this endpoint ", this.addNewPostUrl);
    console.log('request payload', addNewPostPayload);
    return this.http.post<addNewPostResp>(this.addNewPostUrl, addNewPostPayload);
  }

  addNewStory(addNewStoryPayload: addNewStoryReq) {
    this.addNewStoryUrl = URLs.addNewStoryURL;
    console.log("calling this endpoint ", this.addNewStoryUrl);
    console.log('request payload', addNewStoryPayload);
    return this.http.post<addNewStoryResp>(this.addNewStoryUrl, addNewStoryPayload);
  }

  getAllActiveUsers() {
    this.getAllActiveUsersUrl = URLs.getAllActiveUsersURL;
    console.log("calling this endpoint ", this.getAllActiveUsersUrl)
    return this.http.get<UserByUserId[]>(this.getAllActiveUsersUrl);
  }

  getAllBlockedUsers() {
    this.getAllBlockedUsersUrl = URLs.getAllBlockedUsersURL;
    console.log("calling this endpoint ", this.getAllBlockedUsersUrl)
    return this.http.get<UserByUserId[]>(this.getAllBlockedUsersUrl);
  }

  blockUserByUserId(userId: string) {
    this.blockUserByUserIdUrl = URLs.blockUserByUserIdURL;
    const endpoint = this.blockUserByUserIdUrl + userId;
    console.log("calling this endpoint ", endpoint)

    return this.http.put(endpoint, '');
  }

  unblockUserByUserId(userId: string) {
    this.unblockUserByUserIdUrl = URLs.unblockUserByUserIdURL;
    const endpoint = this.unblockUserByUserIdUrl + userId;
    console.log("calling this endpoint ", endpoint)

    return this.http.put(endpoint, '');
  }
}
