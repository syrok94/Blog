import mongoose from 'mongoose';


const storySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0 
    }
}, {
    timestamps: true 
});

const Story = mongoose.model('Story', storySchema);

export default Story;
