import mangoose, { Schema } from 'mongoose';
import bcrypt from "bcrypt"

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

// before saving the user, hash the password
    userSchema.pre('save', async function (next) {
        if (!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });

// compare given password with hashed password    
userSchema.methods.comparepassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
export const User = mangoose.model('User', userSchema);