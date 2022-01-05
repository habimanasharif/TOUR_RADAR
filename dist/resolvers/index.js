"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const userResolvers_1 = __importDefault(require("./userResolvers"));
const adminResolvers_1 = require("./adminResolvers");
const verificationResolvers_1 = require("./verificationResolvers");
const postResolver_1 = __importDefault(require("./postResolver"));
const followResolver_1 = __importDefault(require("./followResolver"));
const resolvers = [
    userResolvers_1.default,
    adminResolvers_1.adminResolvers,
    verificationResolvers_1.verificationResolvers,
    postResolver_1.default,
    followResolver_1.default
];
exports.default = resolvers;
