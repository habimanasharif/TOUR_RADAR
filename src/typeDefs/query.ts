const { gql } = require("apollo-server");

const query = gql`
  type Query {
    users:[User]
  }
`;

export {
  query,
};
