import { gql } from 'apollo-server';

const PostType = gql`
  type Post {
      _id:String
      caption:String
      createdAt:Float
      owner:User
      isLiked:Boolean
      likesNo:Int
      likes:[User]
      comments:[comment]
      commentNo:Int
      location:String
      content:[String]
  }
  `;
export default PostType;
