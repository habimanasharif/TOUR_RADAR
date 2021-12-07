/* eslint-disable import/extensions */
import { ApolloServer } from 'apollo-server';
import dbConnect from './database';
import { typeDefs } from './typeDefs';
import resolvers from './resolvers';

dbConnect();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // get the user token from the headers
    const token = req.headers.authorization || '';

    // try to retrieve a user with the token
    const user = { token };

    // add the user to the context
    return { user };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
