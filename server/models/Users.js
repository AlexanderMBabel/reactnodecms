const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, ' email is required'],
    unique: true
  },
  name: {
    type: String,
    required: [true, 'name is required']
  },
  password: {
    type: String,
    required: [true, 'pasword is required'],
    minlength: 6
  }
});

module.exports = mongoose.model('Users', userSchema);
