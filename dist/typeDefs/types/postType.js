"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const PostType = (0, apollo_server_1.gql) `
  type Post {
      _id:String
      caption:String
      createdAt:Float
      owner:User
      isLiked:Boolean
      likesNo:Int
      likes:[User]
      location:String
      content:[String]
  }
  `;
exports.default = PostType;
