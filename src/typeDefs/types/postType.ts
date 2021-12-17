import { gql } from 'apollo-server';

const PostType = gql`

  type Post {
      caption:String
      createdAt:Int
      Owner:String
      location:String
      content:[String]
  }
  `;
export default PostType;
