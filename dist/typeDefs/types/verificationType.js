"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const verificationType = (0, apollo_server_1.gql) ` 
type Verification {
    message: String
    username: String
    email:String
    cirtificate: String

  }
`;
exports.default = verificationType;
