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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isUser = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
const apollo_server_1 = require("apollo-server");
const jwt_1 = require("../helpers/jwt");
// eslint-disable-next-line import/prefer-default-export
const decodeToken = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!ctx.user.token)
            throw new Error('Invalid access token');
        const user = yield (0, jwt_1.verify)(ctx.user.token.split(' ')[1]);
        return user;
    }
    catch (error) {
        throw error;
    }
});
const isUser = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield decodeToken(ctx);
        if (user.role != 'user')
            throw new apollo_server_1.AuthenticationError('AUTHENTICATION ERROR');
        return user.id;
    }
    catch (error) {
        throw error;
    }
});
exports.isUser = isUser;
const isAdmin = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield decodeToken(ctx);
        if (admin.role != 'admin')
            throw new apollo_server_1.AuthenticationError('AUTHENTICATION ERROR');
        return admin.role;
    }
    catch (error) {
        throw error;
    }
});
exports.isAdmin = isAdmin;
