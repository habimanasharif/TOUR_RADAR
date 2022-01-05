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
const like_1 = __importDefault(require("../modals/like"));
class LikeService {
    static createLike(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield like_1.default.create(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findLike(user, post) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield like_1.default.find({ $and: [{ post }, { likes: user }] });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static updateLikes(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield like_1.default.findOneAndUpdate(filter, { $push: { likes: update } }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findAllLikes(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield like_1.default.find(postId).populate('likes', ['username', 'profilePicture', 'firstname', 'lastname']);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = LikeService;
