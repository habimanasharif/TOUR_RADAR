"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.default = joi_1.default.object().keys({
    firstname: joi_1.default.string().min(3).max(30),
    lastname: joi_1.default.string().min(3).max(30),
    bio: joi_1.default.string().min(10).max(700)
}).options({ allowUnknown: false });
