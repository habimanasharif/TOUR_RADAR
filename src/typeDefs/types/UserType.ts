import { gql } from 'apollo-server';

const userType = gql`
  type User {
    _id:String
    firstname: String
    lastname:String
    username:String
    password: String
    email: String
    profilePicture:String
    isVerified:String
    role:String
    bio:String
    isGuider:String
    token:String
    website:String
  createdAt:String
  }
  
`;
export default userType;
