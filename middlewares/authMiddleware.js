const jwt=require('jsonwebtoken')

const generateToken=(userID)=>{
  const token=jwt.sign({id:userID},'secret',{expiresIn:'7d'})
  return token
}


const requireSignIn=(req,res,next)=>{
  try{
    const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
    req.user=decode
    next()
  }catch(err){
    console.log('err :',err);

  } 
}

module.exports={
  requireSignIn,
  generateToken
}