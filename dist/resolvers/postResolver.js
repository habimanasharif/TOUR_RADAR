"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const controllers_1 = require("../controllers");
const postResolvers = {
    Mutation: {
        createPost: (parent, args, ctx) => controllers_1.Post.createPost(parent, args, ctx),
        deletePost: (parent, args, ctx) => controllers_1.Post.deletPost(parent, args, ctx),
        likePost: (parent, args, ctx) => controllers_1.Post.likePost(parent, args, ctx)
    },
    Query: {
        posts: (parent, args, ctx) => controllers_1.Post.fetchPost(parent, args, ctx),
    },
};
exports.default = postResolvers;
