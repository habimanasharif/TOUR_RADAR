const { gql } = require("apollo-server");

const query = gql`
  type Query {
    books: [Book]
    categories: [Category]
  }
`;

export {
  query,
};
