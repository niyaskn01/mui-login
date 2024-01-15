const express=require('express')
const { userRegisterController, userLoginController } = require('../controllers/userControllers')
const router=express.Router()

//register user
router.post('/register',userRegisterController)

//user login
router.post('/login',userLoginController)


module.exports=router