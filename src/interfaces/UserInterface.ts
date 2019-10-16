import { Document } from 'mongoose';

interface UserInterface extends Document {
    name: string;
    email?: string
}

export default UserInterface;