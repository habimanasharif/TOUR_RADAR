import { gql } from 'apollo-server';

const query = gql`
  type Query {
    users:[User]
    
  }
`;

export default query;
