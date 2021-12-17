/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
import ejs from 'ejs';
import path from 'path';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import config from '../config';

const oAuth2Client = new google.auth.OAuth2(config.CLIENT_ID, config.CLIENT_SECRET, config.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: config.REFRESH_TOKEN });

const mailer = async (emailToSend) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          type: 'OAUTH2',
          user: 'hdidiersharif@gmail.com',
          clientId: config.CLIENT_ID,
          clientSecret: config.CLIENT_SECRET,
          refreshToken: config.REFRESH_TOKEN,
          accessToken
        }

      }
    );
    const template = '../public/template/verifyEmail.ejs';
    const data = await ejs.renderFile(path.join(__dirname, template), emailToSend[1]);

    const mailOption = {
      from: 'TOUR RADAR <hdidiersharif@gmail.com>',
      to: emailToSend[2],
      subject: 'Verification Email',
      html: data
    };
    const result = await transport.sendMail(mailOption);
    return result;
  } catch (error) {
    throw error;
  }
};
export { mailer };
