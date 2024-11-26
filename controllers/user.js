const User = require('./../models/user');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getMe = catchAsync(async (req, res, next) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        return next(new AppError('No user found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    });
});