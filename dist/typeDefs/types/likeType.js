"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const LikeType = (0, apollo_server_1.gql) `
  type Like {
      user:User
      post:Post
  }
  `;
exports.default = LikeType;
