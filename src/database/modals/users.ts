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
    createdAt: {
        type: Number,
        required: false
    }
});

export default mongoose.model('Users', UserSchema);
