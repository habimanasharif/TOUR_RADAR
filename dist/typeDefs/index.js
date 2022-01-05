"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
const query_1 = __importDefault(require("./query"));
const mutation_1 = require("./mutation");
const types_1 = require("./types");
const typeDefs = [query_1.default, mutation_1.mutation, types_1.userType, types_1.AdminType, types_1.verificationType, types_1.PostType, types_1.MessageType, types_1.LikeType];
exports.typeDefs = typeDefs;
