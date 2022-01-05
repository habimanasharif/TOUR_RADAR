"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const MessageType = (0, apollo_server_1.gql) `
  type Message {
      message:String
  }
  `;
exports.default = MessageType;
