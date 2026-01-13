import { MinKey } from 'bson';
import mangoose, { Schema } from 'mongoose';
import { type } from 'node:os';

const postSchema = new Schema(
    {

        name:{
            type: String,
            required: true,
            trim: true, 
        },

        description:{
            type: String,
            required: true,
            trim: true
        },
        
        age:{
            type: Number,
            required: true,
            Min:1,
            max:120
        }   
    },
        {
            timestamps: true
        }
);