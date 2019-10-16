import { model, Schema } from 'mongoose';
import UserInterface from '../interfaces/UserInterface';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String
});

export default model<UserInterface>('User', UserSchema)