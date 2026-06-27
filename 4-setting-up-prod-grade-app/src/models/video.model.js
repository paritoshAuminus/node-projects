import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String,       // cloudinary url
        required: true,
    },

    thumbnail: {
        type: String,       // cloudinary url
        required: true
    },

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,       // cloudinary url (file info)
        required: true,
    },
    views: {
        type: Number,       // cloudinary url (file info)
        required: true,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, 
{
    timestamps: true,
}
)

export const Video = mongoose.model('Video', videoSchema)
