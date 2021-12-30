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
exports.allPostsIterator = void 0;
/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
const like_1 = __importDefault(require("../database/services/like"));
const allPostsIterator = (id, posts) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        posts = yield Promise.all(posts.map((post) => __awaiter(void 0, void 0, void 0, function* () {
            const postId = post._id;
            const postLikes = yield like_1.default.findAllLikes({ post: postId });
            const isLiked = yield like_1.default.findLike(id, postId);
            const result = post;
            result.isLiked = (isLiked.length > 0);
            const like = postLikes[0].likes;
            const likers = yield Promise.all(like.map((likee) => __awaiter(void 0, void 0, void 0, function* () {
                const likes = likee;
                const liker = {
                    _id: postLikes[0]._id,
                    user: likee
                };
                const { user } = liker;
                const likerId = user._id;
                likes._doc.fullname = `${likee.firstname} ${likee.lastname}`;
                return liker;
            })));
            if (like.length === 0) {
                result._doc.likes = 'none';
                result._doc.likesNo = 0;
            }
            else {
                result.likes = like;
                result.likesNo = likers.length;
            }
            return result;
        })));
        const followingPosts = posts.filter((post) => post !== undefined);
        return followingPosts;
    }
    catch (error) {
        throw error;
    }
});
exports.allPostsIterator = allPostsIterator;
