import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
  },

  location: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  content: [
    {
      type: String,
      required: true
    }],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Post', PostSchema);
