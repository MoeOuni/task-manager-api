const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.ObjectId,
        ref: "task",
        required: [true, "Please provide a task id"]
    },
    message: {
        type: String,
        required: [true, "Please provide a message"]
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
});

const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;