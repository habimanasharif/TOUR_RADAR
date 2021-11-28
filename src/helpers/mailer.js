/* eslint-disable import/prefer-default-export */
import ejs from 'ejs';
import path from 'path';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const CLIENT_ID = '917001364111-qjg53ib2jg4vm0fo8dfjg674but11pp7.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04COnccSd9MqSCgYIARAAGAQSNwF-L9IrKyqwEia0kjr-IKoMbfBdxS2YJ4S-CrV5rNDKydZdyZI60_RA_7XUIv4QaqlElUBJmb0';
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const mailer = async (emailToSend) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          type: 'OAUTH2',
          user: 'hdidiersharif@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
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
