import mongoose, { Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    books: [
        {
            description: {type: String },
            author: {type: String },
            image: {type: String },
            preview: {type: String },
            publisher: {type: String },
            date: {type: String },
            title: {type: String },
            pages: {type: String },
            read: { type: Boolean },
            planToRead: { type: Boolean }
        }
    ]
});

userSchema.plugin(mongooseUniqueValidator);

export default mongoose.model('User', userSchema);
