require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task ID -
// 5cc08cb6a8ba9a236019e754

// Task.findByIdAndDelete('5cc08cb6a8ba9a236019e754').then((task) => {
//   console.log(task)
//   return Task.countDocuments({ completed : false })
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// })

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = Task.countDocuments({ completed : false })
  return count
}

deleteTaskAndCount('5cc07ca12fb77d2a58c62bee').then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})
