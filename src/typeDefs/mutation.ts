const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
      addBook(
    title: String!
    author: String!
      ): Book

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
  }
`;

export {
  mutation,
};
