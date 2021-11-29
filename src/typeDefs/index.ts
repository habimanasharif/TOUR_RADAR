import  { query } from  "./query";
import  { mutation} from  "./mutation";
import { userType} from "./types";
import { AdminType } from  "./types";


const typeDefs = [query,mutation,userType,AdminType];

export {
  typeDefs,
};
