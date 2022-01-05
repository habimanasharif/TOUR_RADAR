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
const follow_1 = __importDefault(require("../modals/follow"));
class FollowService {
    static createFollow(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.create(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findFollowing(user, following) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.find({ $and: [{ following }, { owner: user }] });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static follow(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOneAndUpdate(filter, { $push: { following: update } }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static follower(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOneAndUpdate(filter, { $push: { followers: update } }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static unfollow(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOneAndUpdate(filter, { $pull: { following: update } }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static removeFollower(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOneAndUpdate(filter, { $pull: { followers: update } }, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findAllFollowers(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOne(owner)
                    .populate('followers', ['username', 'profilePicture', 'firstname', 'lastname']);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findAllFollowing(owner) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield follow_1.default.findOne(owner)
                    .populate('following', ['username', 'profilePicture', 'firstname', 'lastname']);
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = FollowService;
