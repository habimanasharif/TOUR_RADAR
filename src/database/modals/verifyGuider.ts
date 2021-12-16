import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cirtificate: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: 'none',
  },
  bio: {
    type: String,
    default: '**No Biography**',
  },
  socials: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('VerifyGuider', UserSchema);
