"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
/* eslint-disable lines-between-class-members */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
const apollo_server_1 = require("apollo-server");
const jwt_1 = require("../helpers/jwt");
const bcrypt_1 = require("../helpers/bcrypt");
const users_1 = __importDefault(require("../database/services/users"));
const follow_1 = __importDefault(require("../database/services/follow"));
const verifyGuider_1 = __importDefault(require("../database/services/verifyGuider"));
const post_1 = __importDefault(require("../database/services/post"));
const mailer_1 = require("../helpers/mailer");
const Validations = __importStar(require("../middleware/validation/user"));
const config_1 = __importDefault(require("../config"));
const authorization_1 = require("../middleware/authorization");
const storage_1 = __importDefault(require("../helpers/storage"));
const extention_1 = __importDefault(require("../helpers/extention"));
const iterator_1 = require("../helpers/iterator");
class User {
    static signUp(parent, { input }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstname, lastname, username, password, email, role } = input;
            const exists = yield users_1.default.findUser({ $or: [{ email }, { username }] });
            if (exists) {
                throw new apollo_server_1.UserInputError('USER EXISTS ERROR');
            }
            Validations.signUp(input);
            yield (0, mailer_1.mailer)(['sign-up', {
                    email,
                    firstname,
                    lastname,
                    body: `${config_1.default.HOST}/user/verify?token=${(0, jwt_1.sign)(email)}`
                }, email
            ]);
            const hashedpassword = yield (0, bcrypt_1.generate)(password);
            const newUser = {
                firstname,
                lastname,
                username,
                password: hashedpassword,
                role,
                email,
            };
            const newAcount = yield users_1.default.signUp(newUser);
            newAcount.password = undefined;
            return newAcount;
        });
    }
    static logIn(parent, { password, account }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield users_1.default.findUser({ $or: [{ email: account }, { username: account }] });
            if (!exists) {
                throw new apollo_server_1.UserInputError('USER NOT FOUND');
            }
            const match = (0, bcrypt_1.check)(exists.password, password);
            if (!match) {
                throw new apollo_server_1.UserInputError('INCORRECT PASSWORD');
            }
            if (exists.isVerified === false)
                throw new apollo_server_1.UserInputError('Your email is not verified');
            exists.token = yield (0, jwt_1.sign)({ email: exists.email, id: exists._id, role: 'user' });
            exists.password = undefined;
            return exists;
        });
    }
    static verifyEmail(parent, { token }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield (0, jwt_1.verify)(token);
            const exist = yield users_1.default.findUser({ email });
            if (!exist)
                throw new apollo_server_1.UserInputError('USER NOT FOUND');
            if (exist.isVerified === true)
                throw new apollo_server_1.UserInputError('USER ALREADY VERIFIED');
            const verifiedAccount = yield users_1.default.updateUser({ email }, { isVerified: true });
            verifiedAccount.password = undefined;
            const follow = {
                owner: verifiedAccount._id,
                follower: [],
                following: []
            };
            yield follow_1.default.createFollow(follow);
            return verifiedAccount;
        });
    }
    static updateUser(parent, { input }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, authorization_1.isUser)(ctx);
            const userExists = yield users_1.default.findUser({ _id: user });
            if (!userExists) {
                throw new apollo_server_1.UserInputError("USER DOES'NT EXIST");
            }
            if (userExists.isVerified === false)
                throw new apollo_server_1.UserInputError('User Is Not verified');
            Validations.update(input);
            const update = yield users_1.default.updateUser({ _id: user }, input);
            return update;
        });
    }
    static verifyGuider(parent, { cirtificate }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield (0, authorization_1.isUser)(ctx);
            const ext = (0, extention_1.default)(cirtificate);
            const exist = yield users_1.default.findUser({ _id: user });
            if (!exist)
                throw new apollo_server_1.AuthenticationError('AUTHENTICATION ERROR');
            if ((ext !== 'jpg') && (ext !== 'JPG') && ext !== 'png' && ext !== 'jpeg' && ext !== 'JPEG') {
                throw new apollo_server_1.UserInputError('UNSUPPORTED FILE');
            }
            const response = yield (0, storage_1.default)(cirtificate);
            const request = yield verifyGuider_1.default.findrequest({ email: exist.email });
            if (request) {
                throw new Error('REQUEST ALREADY EXIST');
            }
            const guider = {
                firstname: exist.firstname,
                lastname: exist.lastname,
                username: exist.username,
                email: exist.email,
                profilePicture: exist.profilePicture,
                bio: exist.bio,
                socials: exist.socials,
                cirtificate: response.secure_url
            };
            const verifyGuider = yield verifyGuider_1.default.requestVerification(guider);
            verifyGuider.message = 'verification successfully requested';
            return verifyGuider;
        });
    }
    static fetchUserProfile(parent, { userId }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const user = yield users_1.default.findUser({ _id: userId });
            if (!user || !user.isVerified)
                throw new apollo_server_1.AuthenticationError('No user Found');
            const follower = yield follow_1.default.findAllFollowers({ owner: userId });
            const follow = yield follow_1.default.findAllFollowing({ owner: userId });
            const { followers } = follower;
            const { following } = follow;
            const posts = yield post_1.default.findOwnerPosts({ owner: userId });
            user.totalposts = posts.length;
            user.followers = followers.length;
            user.following = following.length;
            user.allFollowers = followers;
            user.allFollowing = following;
            const followed = yield follow_1.default.findFollowing(id, userId);
            user.isFollowing = (followed.length > 0);
            user.posts = yield (0, iterator_1.allPostsIterator)(id, posts);
            user.isUser = (id === userId);
            return user;
        });
    }
    static updateProfilePicture(parent, { picture }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const user = yield users_1.default.findUser({ id });
            if (!user || !user.isVerified)
                throw new apollo_server_1.AuthenticationError('No user Found');
            const ext = (0, extention_1.default)(picture);
            if ((ext !== 'jpg') && (ext !== 'JPG') && ext !== 'png' && ext !== 'jpeg' && ext !== 'JPEG') {
                throw new apollo_server_1.UserInputError('UNSUPPORTED FILE');
            }
            const response = yield (0, storage_1.default)(picture);
            yield users_1.default.updateUser({ _id: id }, { profilePicture: response.secure_url });
            return ({ message: 'Profile Picture Update successfully' });
        });
    }
    static removeProfilePicture(parent, arg, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const user = yield users_1.default.findUser({ id });
            if (!user || !user.isVerified)
                throw new apollo_server_1.AuthenticationError('No user Found');
            yield users_1.default.updateUser({ _id: id }, { profilePicture: 'none' });
            return ({ message: 'Profile Picture Removed successfully' });
        });
    }
    static changePassword(parent, { oldPassword, newPassword }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = yield (0, authorization_1.isUser)(ctx);
            const user = yield users_1.default.findUser({ id });
            if (!user || !user.isVerified)
                throw new apollo_server_1.AuthenticationError('No user Found');
            const match = (0, bcrypt_1.check)(user.password, oldPassword);
            if (!match) {
                throw new apollo_server_1.UserInputError('INCORRECT PASSWORD');
            }
            const hashedpassword = yield (0, bcrypt_1.generate)(newPassword);
            yield users_1.default.updateUser({ _id: id }, { password: hashedpassword });
            return ({ message: 'Password Changed Succefully' });
        });
    }
}
exports.default = User;
