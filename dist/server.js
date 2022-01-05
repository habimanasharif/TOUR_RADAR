"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
const apollo_server_1 = require("apollo-server");
const database_1 = __importDefault(require("./database"));
const typeDefs_1 = require("./typeDefs");
const resolvers_1 = __importDefault(require("./resolvers"));
(0, database_1.default)();
const server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolvers_1.default,
    context: ({ req }) => {
        // get the user token from the headers
        const token = req.headers.authorization || '';
        // try to retrieve a user with the token
        const user = { token };
        // add the user to the context
        return { user };
    },
});
const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
