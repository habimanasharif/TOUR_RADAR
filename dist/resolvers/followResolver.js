"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const controllers_1 = require("../controllers");
const followResolvers = {
    Query: {
    //  users: () => User.fetchUsers(),
    },
    Mutation: {
        followUser: (parent, args, ctx) => controllers_1.Follow.follow(parent, args, ctx),
        unfollowUser: (parent, args, ctx) => controllers_1.Follow.unfollow(parent, args, ctx),
    }
};
exports.default = followResolvers;
