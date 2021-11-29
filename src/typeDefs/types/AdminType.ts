import {gql} from "apollo-server";
const AdminType = gql`
type Admin {
    
    username:String
    password:String
    token:String
    role:String
}
`;
export {
    AdminType,
};