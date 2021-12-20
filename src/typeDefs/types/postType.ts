import { gql } from 'apollo-server';

const PostType = gql`
  type Post {
      _id:String
      caption:String
      createdAt:Int
      owner:User 
      location:String
      content:[String]
  }
  `;
export default PostType;
