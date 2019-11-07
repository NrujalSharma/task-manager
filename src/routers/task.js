const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
  // console.log(req.body);
  const task = new Task(req.body)

  // task.save().then(() => {
  //   res.status(201).send(task)
  // }).catch((error) => {
  //   res.status(400).send(error)
  // })

  try{
    await task.save()
    res.send(task)
  }
  catch(e){
    res.status(400).send()
  }
})

router.get('/tasks', async (req, res) => {
  // Task.find({}).then((tasks) => {
  //   res.send(tasks)
  // }).catch((error) => {
  //   res.status(500).send()
  // })

  try{
    const tasks = await Task.find({})
    res.send(tasks)
  }
  catch(e){
    res.status(500).send()
  }
})

router.get('/tasks/:id', async (req, res) => {
  const tid = req.params.id

  // Task.findById({_id : tid}).then((task) => {
  //   if(!task){
  //     return res.status(404).send()
  //   }
  //   res.send(task)
  // }).catch((error) => {
  //   res.status(500).send()
  // })

  try{
      const task = await Task.findById({_id : tid})
      if(!task){
        return res.status(404).send()
      }
      res.send(task)
  }
  catch(e){
    res.status(500).send()
  }
})

router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidOperation){
    return res.status(400).send({error: "Invalid updates"})
  }

  try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators: true })
    // console.log(task);
    if(!task){
      return res.status(404).send()
    }

    res.send(task)
  }
  catch(e){
    res.status(400).send(e)
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id)

    if(!task){
      res.status(404).send()
    }

    res.send(task)
  }
  catch(e){
    res.status(500).send()
  }
})

module.exports = router
