import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: false
    },
    id: {
        type: String,
        unique: true,
        required: false
    }
});

const Link = mongoose.model('Link', LinkSchema);

export default Link;