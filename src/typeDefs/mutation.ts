/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-server';

const mutation = gql`
  type Mutation {
    #all mutations
      #user mutation
    signUp(
      firstname: String
    lastname:String
    username:String
    password: String
    email: String
    profilePicture:String
    isVerified:String
    role:String
    bio:String
    website:String
  createdAt:String
    ):User
    #logIn mutation
    logIn(
      
      password:String
      account:String
    ):User
  
  }
`;

export {
  mutation,
};
