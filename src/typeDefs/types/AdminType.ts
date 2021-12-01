import {gql} from "apollo-server";
const AdminType = gql`
type Admin {
    
    token:String
    role:String
}
`;
export {
    AdminType,
};