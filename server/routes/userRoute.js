let express = require('express')
const { CreateUser, getUserById, updateUser } = require('../controller/userController')

let userRoute = express.Router()

userRoute.post('/', CreateUser)
userRoute.get('/profile/:id', getUserById)
userRoute.patch('/update/:id',updateUser)


module.exports = userRoute