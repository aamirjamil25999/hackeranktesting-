const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const { Schema } = mongoose;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ['guest', 'host'],
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  favourites : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Home',
    },
  ],

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);    