"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const apollo_server_1 = require("apollo-server");
const post_1 = __importDefault(require("../database/services/post"));
const users_1 = __importDefault(require("../database/services/users"));
const like_1 = __importDefault(require("../database/services/like"));
const iterator_1 = require("../helpers/iterator");
const authorization_1 = require("../middleware/authorization");
const imageArray_1 = __importDefault(require("../helpers/imageArray"));
const extention_1 = __importDefault(require("../helpers/extention"));
class Post {
    static createPost(_parent, { input }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const user = yield users_1.default.findUser({ _id: id });
            if (!user)
                throw new apollo_server_1.UserInputError('User Not found');
            if (user.isVerified !== true)
                throw new apollo_server_1.UserInputError('Verify Your Email First');
            if (user.isGuider !== true)
                throw new apollo_server_1.UserInputError("This user can't post ");
            input.content.forEach((element) => {
                element = (0, extention_1.default)(element);
                if ((element !== 'jpg') && (element !== 'JPG') && element !== 'png' && element !== 'jpeg' && element !== 'JPEG') {
                    throw new apollo_server_1.UserInputError('UNSUPPORTED FILE');
                }
            });
            input.owner = id;
            const images = yield (0, imageArray_1.default)(input.content);
            input.content = images;
            const post = yield post_1.default.createPost(input);
            const like = {
                post: post._id,
                likes: []
            };
            yield like_1.default.createLike(like);
            return post;
        });
    }
    static fetchPost(_parent, args, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            let posts = yield post_1.default.fetchPost(1, 10);
            posts = yield (0, iterator_1.allPostsIterator)(id, posts);
            return posts;
        });
    }
    static deletPost(parent, { id }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, authorization_1.isUser)(ctx);
            const post = yield post_1.default.fetchSinglePost(id);
            if (!post)
                throw new apollo_server_1.UserInputError('Post Not Available');
            if (post.owner !== user)
                throw new apollo_server_1.UserInputError('You are not allowed to delete  this post');
            const posts = yield post_1.default.deletePost(id);
            return { message: ' Post Deleted Successfully' };
        });
    }
    static likePost(parent, { postId }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const post = yield post_1.default.fetchSinglePost(postId);
            const user = yield users_1.default.findUser({ _id: id });
            if (!user)
                throw new apollo_server_1.UserInputError('User Not found');
            if (!post)
                throw new apollo_server_1.UserInputError('Post Not Found');
            const likeExist = yield like_1.default.findLike(id, post);
            if (likeExist.length > 0)
                throw new apollo_server_1.UserInputError('You Can not like Post Twice');
            yield like_1.default.updateLikes({ post: postId }, id);
            return { message: ' Post liked Successfully' };
        });
    }
}
exports.Post = Post;
