const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const ProjectModel = require('./../models/project');

exports.getAllProjects = catchAsync(async (req, res, next) => {
    const projects = await ProjectModel.find();

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    });
});

exports.getProjectById = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No project ID was provided 💥', 400));
    }

    const project = await ProjectModel.findById(id);

    if (!project) {
        return next(new AppError(`No project found with ${id}`, 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            project
        }
    })
})

exports.getMeProjects = catchAsync(async (req, res, next) => {
    const {_id} = req.user;

    const projects = await ProjectModel.find({members: _id});

    res.status(200).json({
        status: 'success',
        results: projects.length,
        data: {
            projects
        }
    })
})

exports.saveProject = catchAsync(async (req, res, next) => {
    const project = new ProjectModel({
        ...req.body
    })

    await project.save();

    res.status(201).json({
        status: 'success',
        message: `Project '${project.name}' created successfully ✅`,
        data: {
            project
        }
    })
})

exports.updateProject = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No project ID was provided 💥', 400));
    }

    const project = await ProjectModel.findById(id);

    if (!project) {
        return next(new AppError(`No project found with '${id}'`, 404));
    }

    project.set(req.body);

    await project.save();

    res.status(201).json({
        status: 'success',
        message: `Project '${project.name}' updated successfully ✅`,
        data: {
            project
        }
    })
})

exports.deleteProject = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No project ID was provided 💥', 400));
    }

    const project = await ProjectModel.findByIdAndDelete(id);

    if (!project) {
        return next(new AppError(`No project found with '${id}'`, 404));
    }

    res.status(204).json({
        status: 'success',
        message: `Project '${project.name}' deleted successfully ✅`,
        data: null
    })
})