const mongoose = require('mongoose')
const validator = require('validator')

// 1
// Create User Model
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    // default: 0,
    required: true,
    validate(value){
      if(value < 0){
        throw new Error('Age must be a positive number')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email invalid')
      }
    }
  },
  password:{
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error('password could not contain the phrase \'password\'')
      }
    }
  }
})

module.exports = User
