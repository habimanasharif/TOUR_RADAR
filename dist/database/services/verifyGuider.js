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
const verifyGuider_1 = __importDefault(require("../modals/verifyGuider"));
class VerifyGuider {
    static requestVerification(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield verifyGuider_1.default.create(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static findrequest(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield verifyGuider_1.default.findOne(data);
            }
            catch (error) {
                throw error;
            }
        });
    }
    static fetchrequests() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield verifyGuider_1.default.find().sort({ createdAt: -1 });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = VerifyGuider;
