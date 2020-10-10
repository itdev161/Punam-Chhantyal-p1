import mongoose from 'mongoose';
import {Name, Email, Password, Weight, Height} from './result.js';

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Weight: {
        type: String,
        required: true
    },
    Height: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);

export default User;