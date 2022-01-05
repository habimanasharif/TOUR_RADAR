"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const userType = (0, apollo_server_1.gql) `
  type User {
    _id:String
    firstname: String
    lastname:String
    username:String
    password: String
    email: String
    profilePicture:String
    isVerified:String
    role:String
    totalposts:Int
    followers:Int
    following:Int
    allFollowers:[User]
    allFollowing:[User]
    isFollowing:Boolean
    posts:[Post]
    isUser:Boolean
    bio:String
    isGuider:String
    token:String
    website:String
  createdAt:String
  }
  
`;
exports.default = userType;
