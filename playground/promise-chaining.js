require('../src/db/mongoose')
const User = require('../src/models/user')

// User ID -
// 5cbddf803ce7602a3020dcf9

// User.findByIdAndUpdate('5cbddf803ce7602a3020dcf9', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeAndCount('5cbddf803ce7602a3020dcf9', 5).then((count) => {
  console.log(count);
}).catch((e) => {
  console.log(e);
})
