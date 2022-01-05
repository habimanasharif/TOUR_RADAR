"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminResolvers = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const controllers_1 = require("../controllers");
const adminResolvers = {
    Mutation: {
        AdminLogin: (parent, args, ctx) => controllers_1.Admin.AdminLogin(parent, args, ctx),
    }
};
exports.adminResolvers = adminResolvers;
