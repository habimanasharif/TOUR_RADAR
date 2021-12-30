"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Follow = exports.Post = exports.Admin = exports.User = void 0;
/* eslint-disable import/extensions */
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Admin_1 = require("./Admin");
Object.defineProperty(exports, "Admin", { enumerable: true, get: function () { return Admin_1.Admin; } });
const Posts_1 = require("./Posts");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return Posts_1.Post; } });
const follow_1 = require("./follow");
Object.defineProperty(exports, "Follow", { enumerable: true, get: function () { return follow_1.Follow; } });
