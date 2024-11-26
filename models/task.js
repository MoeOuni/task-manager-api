const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the task"],
    },
    description: {
        type: String,
    },
    code: {
        type: String,
    },
    status: {
        type: String,
        enum: ["backlog", "todo", "in-progress", 'ready-for-test', 'testing', 'done', 'refactor'],
        default: "backlog"
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low"
    },
    dueDate: {
        type: Date,
    },
    projectID: {
        type: mongoose.Schema.ObjectId,
        ref: "project"
    },
    assignee: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});

taskSchema.pre('save', async function(next) {
    if (this.isNew) {
        const taskCount = await mongoose.model('task').countDocuments();
        this.code = `T-${String(taskCount + 1).padStart(4, '0')}`;
    }
    next();
});

const TaskModel = mongoose.model("task", taskSchema);



module.exports = TaskModel;