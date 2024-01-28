import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
