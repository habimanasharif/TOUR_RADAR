import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
  },
  user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now

  }

});

export default mongoose.model('comments', commentSchema);
