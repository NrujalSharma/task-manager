const express = require('express')
require ("./db/mongoose")

// Models
// const User = require('./models/User')
// const Task = require('./models/Task')

// Routers
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})
