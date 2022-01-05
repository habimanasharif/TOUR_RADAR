"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const query = (0, apollo_server_1.gql) `
  type Query {
    verifications:[Verification]
    posts:[Post]
    userProfile(userId:String):User
    fetchSinglePost(postId:String):Post
    
  }
`;
exports.default = query;
