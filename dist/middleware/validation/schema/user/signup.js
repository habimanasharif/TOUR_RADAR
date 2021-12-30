"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
exports.default = joi_1.default.object().keys({
    firstname: joi_1.default.string().min(3).max(30).required(),
    lastname: joi_1.default.string().min(3).max(30).required(),
    username: joi_1.default.string().required()
        .regex(/^[a-z0-9_.]{3,25}$/),
    password: joi_1.default.string().min(3).max(25).required(),
    email: joi_1.default.string().required().email(),
}).options({ allowUnknown: false });
