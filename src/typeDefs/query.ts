import { gql } from 'apollo-server';

const query = gql`
  type Query {
    verifications:[Verification]
    posts:[Post]
    userProfile(userId:String):User
    
  }
`;

export default query;
