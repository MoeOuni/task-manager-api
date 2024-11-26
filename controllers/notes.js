const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const NoteModel = require('./../models/note');

exports.getNotes = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!taskId) {
        return next(new AppError('No task ID was provided', 400));
    }

    const notes = await NoteModel.find({taskId}).populate({path: 'createdBy', model: 'user'});

    res.status(200).json({
        status: 'success',
        results: notes.length,
        data: {
            notes
        }
    })
});

exports.createNote = catchAsync(async(req, res, next) => {
    const {_id} = req.user;

    const note = new NoteModel({
        ...req.body,
        createdBy: _id
    });

    await note.save();

    res.status(201).json({
        status: 'success',
        message: 'Note created successfully ✅',
        data: {
            note
        }
    })
});

exports.updateNote = catchAsync(async(req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No note ID was provided', 400));
    }

    const note = await NoteModel.findByIdAndUpdate(id, {
        ...req.body
    }, {new: true});

    if (!note) {
        return next(new AppError(`No note found with ${id}`, 404));
    }

    res.status(201).json({
        status: 'success',
        message: 'Note updated successfully ✅',
        data: {
            note
        }
    })
});

exports.deleteNote = catchAsync(async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
        return next(new AppError('No note ID was provided', 400));
    }

    const note = await NoteModel.findByIdAndDelete(id);

    if (!note) {
        return next(new AppError(`No note found with ${id}`, 404));
    }

    res.status(204).json({
        status: 'success',
        message: 'Note deleted successfully ✅'
    })
})