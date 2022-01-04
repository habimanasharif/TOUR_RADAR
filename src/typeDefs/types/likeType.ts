import { gql } from 'apollo-server';

const LikeType = gql`
  type Like {
      user:User
      post:Post
  }
  `;
export default LikeType;
