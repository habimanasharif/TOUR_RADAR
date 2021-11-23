import { gql } from "apollo-server";

const userType = gql`
  type User {
    firstname: String
    lastname:String
    username:String
    password: String
    email: String
    profilePicture:String
    isVerified:String
    role:String
    bio:String
    token:String
    website:String
  createdAt:String
  }
`;
export {
  userType,
};
