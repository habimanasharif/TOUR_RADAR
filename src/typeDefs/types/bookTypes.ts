import {gql} from "apollo-server";

const bookType = gql`
  type Book {
    title: String
    author: String
  }
`;
export {
  bookType,
};
