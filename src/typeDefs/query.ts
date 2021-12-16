import { gql } from 'apollo-server';

const query = gql`
  type Query {
    verifications:[Verification]
    
  }
`;

export default query;
