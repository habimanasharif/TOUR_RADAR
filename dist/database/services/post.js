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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
const post_1 = __importDefault(require("../modals/post"));
class PostService {
    static createPost(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield post_1.default.create(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static fetchPost(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield post_1.default.find()
                    .sort({ createdAt: -1 })
                    .populate('owner', ['username', 'profilePicture'])
                    .skip((page - 1) * limit)
                    .limit(limit);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield post_1.default.deleteOne({ _id: id });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static fetchSinglePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield post_1.default.findOne({ _id: id });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findOwnerPosts(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield post_1.default.find(id)
                    .sort({ createdAt: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = PostService;
