"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutation = void 0;
/* eslint-disable import/prefer-default-export */
const apollo_server_1 = require("apollo-server");
const mutation = (0, apollo_server_1.gql) `
input user {
  firstname: String!
  lastname:String!
  username:String!
  password:String!
  email: String!
  profilePicture:String
  isVerified:String
  role:String
  bio:String
  website:String
}
input update{
  firstname:String
  lastname:String
  bio:String
  website:String
}
input post {
      caption:String!
      location:String!
      content:[String]!
}
scalar Upload

  type Mutation {
    #all mutations
      #user mutation
      
    signUp(
      input:user
    ):User
    #logIn mutation
    logIn(
      
      password:String
      account:String
    ):User
  #AdminLogin mutation
  AdminLogin(
    username:String
    password:String
  ):Admin

    #verify email mutation
    verifyEmail(
      token:String
    ):User
 #updating#updating user mutation
 updateUser(
   input:update
 ):User
  
    verifyGuider(
     cirtificate:Upload!,
    ):Verification
    
    adminverify(
      email:String!
    ):User
   
   createPost(
    input:post!
   ):Post

   deletePost(
     id:String!
   ):Message
   likePost(
     postId:String!
   ):Message
  followUser(
    userId:String!
  ):Message
  unfollowUser(
    userId:String!
  ):Message
  updateProfilePicture(
    picture:String!
  ):Message
  removeProfilePicture:Message
  changePassword(oldPassword:String,newPassword:String):Message
  }
  
    
  
 
`;
exports.mutation = mutation;
