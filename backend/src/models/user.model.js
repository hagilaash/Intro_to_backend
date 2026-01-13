import mangoose, { Schema } from 'mongoose';
import { kMaxLength } from 'node:buffer';
import { type } from 'node:os';
const userSchema = new Schema(
    {

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,  // remove whitespace from both ends
            minlength: 1,
            kMaxLength: 50
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxLength:50
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/.+\@.+\..+/, 'Please fill a valid email address']  
        }
    },
        {
            timestamps: true
        }
); 

export const User = mangoose.model('User', userSchema);