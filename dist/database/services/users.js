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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
const users_1 = __importDefault(require("../modals/users"));
class UserService {
    static signUp(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users_1.default.create(newUser);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users_1.default.findOne(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static updateUser(filter, update) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield users_1.default.findOneAndUpdate(filter, update, { new: true });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = UserService;
