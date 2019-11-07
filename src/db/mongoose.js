const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})


// // 1
// // Create User Model
// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value){
//       if(value < 0){
//         throw new Error('Age must be a positive number')
//       }
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value){
//       if(!validator.isEmail(value)){
//         throw new Error('Email invalid')
//       }
//     }
//   },
//   password:{
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value){
//       if(value.toLowerCase().includes('password')){
//         throw new Error('password could contain the phrase \'password\'')
//       }
//     }
//   }
// })


// // 2
// // Create Task Model(task)
// const Task = mongoose.model('Task', {
//   description:{
//     type: String,
//     required: true,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   }
// })


// // 1
// // Define data for user collection
// const me = new User({
//   name: 'Nirali',
//   // age: 'ds',
//   age: 23
// })


// // 1
// // Enter data to user collection
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })


// // 2
// // Define data for task collection(task)
// const task1 = new Task({
//   description: 'Task2',
//   completed: 'true'
// })


// // 2
// // Enter data for task collection(task)
// task1.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })


// // 3
// // Define data for user collection with email id
// const me = new User({
//   name: 'Nirali',
//   // age: 'ds',
//   age: 23,
//   email: 'ppp@pp.in0'
// })


// // 3
// // Enter data to user collection
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })


// // 4
// // Define data for user collection with trim, lowercae and default filters
// const me = new User({
//   name: '     Pappu      P         ',
//   // age: 'ds',
//   email: 'PK.48654GHJhbhj@PKOJIO.in'
// })
//
//
// // 4
// // Enter data to user collection
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })


// // 5
// // password added to user
// const me = new User({
//   name: '     Pappu      P         ',
//   // age: 'ds',
//   email: 'PK.48654GHJhbhj@PKOJIO.in',
//   password: '          IHGUpasdjckpasswonc          '
// })
//
//
// // 4
// // Enter data to user collection
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })


// // 2
// // Define data for task collection(task)
// const task1 = new Task({
//   description: '           Wash clothes         '
// })


// // 2
// // Enter data for task collection(task)
// task1.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })
