import { gql } from 'apollo-server';

const MessageType = gql`
  type Message {
      message:String
  }
  `;
export default MessageType;
