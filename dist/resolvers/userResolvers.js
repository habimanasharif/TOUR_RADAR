"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable import/extensions */
const controllers_1 = require("../controllers");
const userResolvers = {
    Query: {
        userProfile: (parent, args, ctx) => controllers_1.User.fetchUserProfile(parent, args, ctx),
    },
    Mutation: {
        signUp: (parent, args, ctx) => controllers_1.User.signUp(parent, args, ctx),
        // login
        logIn: (parent, args, ctx) => controllers_1.User.logIn(parent, args, ctx),
        verifyEmail: (parent, args, ctx) => controllers_1.User.verifyEmail(parent, args, ctx),
        updateUser: (parent, args, ctx) => controllers_1.User.updateUser(parent, args, ctx),
        verifyGuider: (parent, args, ctx) => controllers_1.User.verifyGuider(parent, args, ctx),
        updateProfilePicture: (parent, args, ctx) => controllers_1.User.updateProfilePicture(parent, args, ctx),
        removeProfilePicture: (parent, args, ctx) => controllers_1.User.removeProfilePicture(parent, args, ctx),
        changePassword: (parent, args, ctx) => controllers_1.User.changePassword(parent, args, ctx),
    }
};
exports.default = userResolvers;
