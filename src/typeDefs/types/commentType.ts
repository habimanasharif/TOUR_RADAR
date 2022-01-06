import { gql } from 'apollo-server';

const commentType = gql`
 type comment {
user:User
post:Post
 }
 `;
export default commentType;
