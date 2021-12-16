import { gql } from 'apollo-server';

const verificationType = gql` 
type Verification {
    message: String
    username: String
    email:String
    cirtificate: String

  }
`;
export default verificationType;
