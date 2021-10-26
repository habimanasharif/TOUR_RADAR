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
      password: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: true
      },
      profilePicture: {
        type: String,
        default: 'none',
      },
      isVerified: {
        type: String,
        default: false,
      },
      isPoet: {
        type: String,
        default: false,
      },
      bio: {
        type: String,
        default: '**No Biography**',
      },
      socials: {
          type: String,
          default:null,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      }
});

export default mongoose.model('Users', UserSchema);
