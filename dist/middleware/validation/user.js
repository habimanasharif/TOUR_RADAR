"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.signUp = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
const validator_1 = __importDefault(require("../../helpers/validator"));
const signup_1 = __importDefault(require("./schema/user/signup"));
const update_1 = __importDefault(require("./schema/user/update"));
const signUp = ({ firstname, lastname, username, password, email }) => {
    (0, validator_1.default)(signup_1.default, {
        firstname, lastname, username, password, email
    });
};
exports.signUp = signUp;
const update = (payload) => {
    (0, validator_1.default)(update_1.default, payload);
};
exports.update = update;
