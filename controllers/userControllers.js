const { hashPassword, comparePassword } = require('../helpers/authHelpers')
const { generateToken } = require('../middlewares/authMiddleware')
const userModel=require('../modal/userModel')


//register user
const userRegisterController=async(req,res)=>{
  const {name,email,password}=req.body
  if(!name) return res.send({message:'name is required'})
  if(!email) return res.send({message:'email is required'})
  if(!password) return res.send({message:'password is required'})

  try {
    const exiUser=await userModel.findOne({email})
    if(exiUser){
      return res.send({message:"User already exists"});
    }
    const hashedPassword=await hashPassword(password)
    const newUser = await userModel.create({
      name , email , password:hashedPassword
    })
    const token=generateToken(newUser?._id)
    res.status(200).send({
      success:true,
      message:'registration success',
      user:newUser,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'error in register'
    })
  }
}

//user login
const userLoginController=async(req,res)=>{
  const {email,password}=req.body
  if(!email || !password) return res.send({message:'invalid email or password'})

  try {
    const user=await userModel.findOne({email})
    if(!user) return res.send({message:'invalid email'}) 

    const validPassword=await comparePassword(password,user.password)
    if(!validPassword) return res.send({message:'invalid password'})

    const token =generateToken(user?._id)
    res.status(200).send({ 
      message:'login successfull',
      success:true, 
      user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'error in login'
    })
  }
}

module.exports={
  userLoginController,
  userRegisterController
}