"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificationResolvers = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const controllers_1 = require("../controllers");
const verificationResolvers = {
    Query: {
        verifications: (parent, args, ctx) => controllers_1.Admin.Fetchverifications(parent, args, ctx)
    },
    Mutation: {
        adminverify: (parent, args, ctx) => controllers_1.Admin.verifyGuider(parent, args, ctx),
        verifyGuider: (parent, args, ctx) => controllers_1.User.verifyGuider(parent, args, ctx),
    }
};
exports.verificationResolvers = verificationResolvers;
