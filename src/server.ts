/* eslint-disable import/extensions */
import { ApolloServer } from 'apollo-server';
import dbConnect from './database';
import { typeDefs } from './typeDefs';
import resolvers from './resolvers';

dbConnect();
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
