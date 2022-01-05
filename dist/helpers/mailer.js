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
exports.mailer = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const googleapis_1 = require("googleapis");
const config_1 = __importDefault(require("../config"));
const oAuth2Client = new googleapis_1.google.auth.OAuth2(config_1.default.CLIENT_ID, config_1.default.CLIENT_SECRET, config_1.default.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: config_1.default.REFRESH_TOKEN });
const mailer = (emailToSend) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = yield oAuth2Client.getAccessToken();
        const transport = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAUTH2',
                user: 'hdidiersharif@gmail.com',
                clientId: config_1.default.CLIENT_ID,
                clientSecret: config_1.default.CLIENT_SECRET,
                refreshToken: config_1.default.REFRESH_TOKEN,
                accessToken
            }
        });
        const template = '../public/template/verifyEmail.ejs';
        const data = yield ejs_1.default.renderFile(path_1.default.join(__dirname, template), emailToSend[1]);
        const mailOption = {
            from: 'TOUR RADAR <hdidiersharif@gmail.com>',
            to: emailToSend[2],
            subject: 'Verification Email',
            html: data
        };
        const result = yield transport.sendMail(mailOption);
        return result;
    }
    catch (error) {
        throw error;
    }
});
exports.mailer = mailer;
