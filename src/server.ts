import dbConnect from './database';

import { ApolloServer, gql } from'apollo-server';


const typeDefs = gql`
  
  # type Book {
  #   title: String!
  #   author: String!
  # }
  
`;
// const books = [
//     {
//       title: 'The Awakening',
//       author: 'Kate Chopin',
//     },
//     {
//       title: 'City of Glass',
//       author: 'Paul Auster',
//     },
//   ];
  
  
const resolvers = {
    Query: {
      // books: () => books,
      
    },
  };
  dbConnect();
  
const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({url}:{url:any}) => {
  console.log(` Server ready at ${url}`);
});
