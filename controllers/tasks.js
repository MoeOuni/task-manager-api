const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const TaskModel = require('./../models/task');
const ProjectModel = require('./../models/project');

exports.getProjectsTasks = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No project ID was provided', 400));
    }

    const tasks = await TaskModel.find({projectID: id}).populate({path: 'projectID', model: 'project'});

    res.status(200).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    })
})

exports.getMeProjectsTasks = catchAsync(async (req, res, next) => {
    // User id from the token
    const {_id} = req.user;

    const {projectID} = req?.query;

    const tasks = projectID
        ? await TaskModel.find({assignee: _id, projectID})
        : await TaskModel.find({assignee: _id}).populate({path: 'projectID', model: 'project'});

    res.status(201).json({
        status: 'success',
        results: tasks.length,
        data: {
            tasks
        }
    })
})

exports.getTaskById = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No task ID was provided ??', 400));
    }

    const task = await TaskModel.findById(id);

    if (!task) {
        return next(new AppError(`No task found with ${id}`, 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            task
        }
    });
});

exports.createTask = catchAsync(async (req, res, next) => {
    // User id from the token
    const {_id} = req.user;

    if (!req.body.projectID) {
        return next(new AppError('Please provide a project ID 💥', 400));
    }

    const project = await ProjectModel.findById(req.body.projectID);

    if (!project) {
        return next(new AppError(`No project found with '${req.body.projectID}'`, 404));
    }

    const task = new TaskModel({
        ...req.body,
        createdBy: _id
    });

    await task.save();

    res.status(201).json({
        status: 'success',
        message: `Task '${task.code}' created successfully ✅`,
        data: {
            task
        }
    })
});

exports.updateTask = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No task ID was provided 💥', 400));
    }

    const task = await TaskModel.findByIdAndUpdate(id, {
        ...req.body
    }, {new: true});

    if (!task) {
        return next(new AppError(`No task found with ${id}`, 404));
    }

    res.status(201).json({
        status: 'success',
        message: `Task '${task.code}' updated successfully ✅`,
        data: {
            task
        }
    })
});

exports.deleteTask = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No task ID was provided ??', 400));
    }

    const task = await TaskModel.findByIdAndDelete(id);

    if (!task) {
        return next(new AppError(`No task found with ${id}`, 404));
    }

    res.status(204).json({
        status: 'success',
        message: `Task '${task.code}' deleted successfully ✅`
    })
})