import { gql } from 'apollo-server';

const query = gql`
  type Query {
    verifications:[Verification]
    posts:[Post]
    
  }
`;

export default query;
