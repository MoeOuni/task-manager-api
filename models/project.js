const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for the project"],
        unique: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    members: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }
    ],
}, {
    timestamps: true
})

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;