const mongoose=require('mongoose')
require('dotenv').config()
const mongoURL=process.env.MONGO_URL
//connecting to the database using mongoose

const connect=()=>{
  try {
    mongoose.connect(mongoURL)
    console.log('connected with database');
  } catch (error) {
    console.log('error in connection');
  }
}

module.exports=connect