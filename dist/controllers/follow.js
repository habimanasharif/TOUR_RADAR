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
exports.Follow = void 0;
/* eslint-disable brace-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
const apollo_server_1 = require("apollo-server");
const authorization_1 = require("../middleware/authorization");
const users_1 = __importDefault(require("../database/services/users"));
const follow_1 = __importDefault(require("../database/services/follow"));
class Follow {
    static follow(parent, { userId }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const followed = yield users_1.default.findUser({ _id: userId });
            const follow = yield users_1.default.findUser({ _id: id });
            if (!followed)
                throw new apollo_server_1.UserInputError('User Not found');
            if (!follow)
                throw new apollo_server_1.UserInputError('User Not Found');
            if (id === userId)
                throw new apollo_server_1.UserInputError("You can't Follow Yourself");
            const followExist = yield follow_1.default.findFollowing(id, userId);
            if (followExist.length > 0)
                throw new Error('Already Following');
            yield follow_1.default.follow({ owner: id }, userId);
            yield follow_1.default.follower({ owner: userId }, id);
            return { message: 'User followed Succefully' };
        });
    }
    static unfollow(parent, { userId }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const followed = yield users_1.default.findUser({ _id: userId });
            const follow = yield users_1.default.findUser({ _id: id });
            if (!followed)
                throw new apollo_server_1.UserInputError('User Not found');
            if (!follow)
                throw new apollo_server_1.UserInputError('User Not Found');
            if (id === userId)
                throw new apollo_server_1.UserInputError("You can't Follow Yourself");
            const followExist = yield follow_1.default.findFollowing(id, userId);
            if (followExist.length === 0)
                throw new Error('You dont follow the user');
            yield follow_1.default.unfollow({ owner: id }, userId);
            yield follow_1.default.removeFollower({ owner: userId }, id);
            return { message: 'User Unfollowed Succefully' };
        });
    }
}
exports.Follow = Follow;
