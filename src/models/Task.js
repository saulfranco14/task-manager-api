import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ['pendiente', 'completada'],
        default: 'pendiente'
    }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
