const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    addresses: [
        {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        country: { type: String, required: true },
        isDefault: { type: Boolean, default: false }
        }
    ],
    paymentMethods: [
        {
        cardType: { type: String },
        last4: { type: String },
        expiry: { type: String },
        isDefault: { type: Boolean, default: false }
        }
    ],
    socialLogin: {
        googleId: { type: String },
        facebookId: { type: String }
    },
    resetPasswordToken: { type: String },
    resetPasswordExpire: { type: Date }
    }, { timestamps: true });

    userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    });

    userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    };

module.exports = mongoose.model('User', userSchema);