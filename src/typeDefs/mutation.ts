/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-server';

const mutation = gql`
input user {
  firstname: String!
  lastname:String!
  username:String!
  password:String!
  email: String!
  profilePicture:String
  isVerified:String
  role:String
  bio:String
  website:String
}
input post {
      caption:String!
      location:String!
      content:[String]!
}
scalar Upload

  type Mutation {
    #all mutations
      #user mutation
      
    signUp(
      input:user
    ):User
    #logIn mutation
    logIn(
      
      password:String
      account:String
    ):User
  #AdminLogin mutation
  AdminLogin(
    username:String
    password:String
  ):Admin

    #verify email mutation
    verifyEmail(
      token:String
    ):User
    verifyGuider(
     cirtificate:Upload!,
    ):Verification
    
    adminverify(
      email:String!
    ):User
   
   createPost(
    input:post
   ):Post
  }
`;

export {
  mutation,
};
