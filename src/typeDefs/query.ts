const { gql } = require("apollo-server");

const query = gql`
  type Query {
    users:[User]
    Admins:[Admin]
  }
`;

export {
  query,
};
