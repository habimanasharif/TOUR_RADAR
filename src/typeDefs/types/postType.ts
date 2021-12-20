import { gql } from 'apollo-server';

const PostType = gql`
  type Post {
      caption:String
      createdAt:Int
      owner:User 
      location:String
      content:[String]
  }
  `;
export default PostType;
