import {gql} from "apollo-server";

const categoryType =gql`
type Category {
 name:String
 description:String
}
`;

export{
  categoryType,  
};
