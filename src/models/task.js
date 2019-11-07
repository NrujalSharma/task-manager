const mongoose = require('mongoose')

// 2
// Create Task Model(task)
const Task = mongoose.model('Task', {
  description:{
    type: String,
    required: true,
    trim: true
  },
  completed:{
    type: Boolean,
    default: false
  }
})

module.exports = Task
