export const URLs = {
    registerURL: "http://localhost:8080/api/auth/signup",
    loginURL: "http://localhost:8080/api/auth/authenticate",
    getAllPostsByUserIdsURL: "http://localhost:8080/api/posts/getAllPostsByUserIdsInDescOrderOfDates/",
    getAllPostsByUserIdURL: "http://localhost:8080/api/posts/getAllPostsByUserId/",
    getAllStoriesByUserIdsURL: "http://localhost:8080/api/stories/getAllStoriesByUserIdsInDescOrderOfDates24Hrs/",
    getAllStoriesByUserIdURL: "http://localhost:8080/api/stories/getAllStoriesByUserId/",
    getAllFriendsURL: "http://localhost:8080/api/friends/getAllFriendsByUserId/",
    getAllFriendRequestURL: "http://localhost:8080/api/friends/getAllFriendRequestByUserId/",
    getAllPendingFriendRequestURL: "http://localhost:8080/api/friends/getAllPendingFriendRequestByUserId/",
    getAllPeopleYouMayKnowURL: "http://localhost:8080/api/friends/getAllActiveUsersForNetworkPage/",
    acceptFriendRequestURL: "http://localhost:8080/api/friends/acceptFriendRequest?",
    rejectFriendRequestURL: "http://localhost:8080/api/friends/deleteFriendRequest?",
    addNewFriendRequestURL : "http://localhost:8080/api/friends/addNewFriendRequest",
    unfriendAFriendURL: "http://localhost:8080/api/friends/unfriendAFriendRequest?",
    findUserByUserIdURL: "http://localhost:8080/api/users/findUserByUserId/",
    findUserByUserIdCompleteDataURL: "http://localhost:8080/api/users/findUserByUserIdCompleteData/",
    setLikesByPostIdURL: "http://localhost:8080/api/posts/setLikes/",
    getLikesByPostIdURL: "http://localhost:8080/api/posts/getLikes/",
    getCommentsByPostIdURL: "http://localhost:8080/api/posts/getComments/",
    setCommentsByPostIdURL: "http://localhost:8080/api/posts/setComments/",
    uploadNewImageURL: "http://localhost:8080/api/images/upload",
    addNewPostURL: "http://localhost:8080/api/posts/addNewPost",
    addNewStoryURL: "http://localhost:8080/api/stories/addNewStory",
    getImageFromDBURL: "http://localhost:8080/api/images/",
    getAllActiveUsersURL: "http://localhost:8080/api/users/getAllActiveUsers",
    getAllBlockedUsersURL: "http://localhost:8080/api/users/getAllInactiveUsers",
    blockUserByUserIdURL: "http://localhost:8080/api/users/blockUserByUserId/",
    unblockUserByUserIdURL: "http://localhost:8080/api/users/unblockUserByUserId/",
}