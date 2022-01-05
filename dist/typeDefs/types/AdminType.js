"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminType = void 0;
/* eslint-disable import/prefer-default-export */
const apollo_server_1 = require("apollo-server");
const AdminType = (0, apollo_server_1.gql) `
type Admin {
    
    token:String
    role:String
}
`;
exports.AdminType = AdminType;
