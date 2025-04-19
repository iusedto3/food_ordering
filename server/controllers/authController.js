const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/email');
const generateToken = require('../utils/generateToken');

// @desc    Register user
// @route   POST /api/auth/register
exports.register = async (req, res, next) => {
const { name, email, password } = req.body;

try {
const user = await User.create({
    name,
    email,
    password
});

sendTokenResponse(user, 201, res);
} catch (err) {
next(err);
}
};

// @desc    Login user
// @route   POST /api/auth/login
exports.login = async (req, res, next) => {
const { email, password } = req.body;

if (!email || !password) {
return next(new ErrorResponse('Please provide an email and password', 400));
}

try {
const user = await User.findOne({ email }).select('+password');

if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
}

const isMatch = await user.matchPassword(password);

if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
}

    sendTokenResponse(user, 200, res);
} catch (err) {
next(err);
}
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
const token = generateToken(user._id);

const options = {
expires: new Date(
    Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
),
httpOnly: true,
secure: process.env.NODE_ENV === 'production'
};

res
.status(statusCode)
.cookie('token', token, options)
.json({
    success: true,
    token,
    user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar
    }
});
};