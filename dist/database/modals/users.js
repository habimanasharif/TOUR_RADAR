"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: 'none',
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isGuider: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        default: '**No Biography**',
    },
    socials: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
exports.default = mongoose_1.default.model('User', UserSchema);
