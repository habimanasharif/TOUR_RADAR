import dbConnect from './database';
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from"./typeDefs";
import { resolvers }  from "./resolvers";


  dbConnect();
  


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
