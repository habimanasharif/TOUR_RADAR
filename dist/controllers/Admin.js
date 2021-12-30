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
exports.Admin = void 0;
/* eslint-disable brace-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
const apollo_server_1 = require("apollo-server");
const jwt_1 = require("../helpers/jwt");
const authorization_1 = require("../middleware/authorization");
const config_1 = __importDefault(require("../config"));
const verifyGuider_1 = __importDefault(require("../database/services/verifyGuider"));
const users_1 = __importDefault(require("../database/services/users"));
class Admin {
    static AdminLogin(_parent, { password, username }, _ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (username !== config_1.default.username || password !== config_1.default.password) 
            // eslint-disable-next-line nonblock-statement-body-position
            {
                throw new apollo_server_1.UserInputError('WRONG CREDITENTIALS');
            }
            const token = yield (0, jwt_1.sign)({ role: 'admin' });
            return { token, role: 'admin' };
        });
    }
    static Fetchverifications(_parent, _args, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield (0, authorization_1.isAdmin)(ctx);
            const requests = verifyGuider_1.default.fetchrequests();
            return requests;
        });
    }
    static verifyGuider(_parent, { email }, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield (0, authorization_1.isAdmin)(ctx);
            const user = yield users_1.default.findUser({ email });
            if (!user)
                throw new apollo_server_1.UserInputError('USER NOT FOUND');
            if (user.isVerified !== true)
                throw new apollo_server_1.UserInputError('USER NOT VERIFIED');
            const updateUser = users_1.default.updateUser({ email }, { isGuider: true });
            return updateUser;
        });
    }
}
exports.Admin = Admin;
