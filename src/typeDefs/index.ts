import  { query } from  "./query";
import  { mutation} from  "./mutation";
import { bookType,categoryType,userType } from "./types";

const typeDefs = [query,mutation,bookType,categoryType,userType];

export {
  typeDefs,
};
