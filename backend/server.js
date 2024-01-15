const express=require('express')
const cors=require('cors')
require('dotenv').config()
const db=require('./config/connect')
const userRouter=require('./routes/userRoutes')
const app=express()

app.use(express.json())
app.use(cors())
db()
app.use('/user',userRouter)

const port=process.env.PORT || 8080
app.listen(port,()=>{
  console.log('server is running at port',port);
})

