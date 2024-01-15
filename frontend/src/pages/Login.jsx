import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axiosInstance from '../axios/axios'
import Layout from '../components/Layout'
import toast from 'react-hot-toast'


function Login() {
  const paperStyle={
    padding:10,
    width:'25%',
    margin:"120px auto",
    textAlign:"center"
  }
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit=async()=>{
    const {data}=await axiosInstance.post('/user/login',formData)
    if(data?.success){
      //window.localStorage.setItem('token', data.token)
      navigate('/')
      setTimeout(() => {
        toast.success(data.message)
      }, 300);
      
    }else{
      toast.error(data.message)
    }
  }
  return (
    <Layout>
    <Grid>
      <Paper elevation={7} style={paperStyle}>
        <Typography variant='h5'>
          Login
        </Typography>
        <Box>
          <FormControl>
            <TextField label='email' 
            variant='standard'
            style={{ marginBottom: '16px' }}
            name='email'
            onChange={(e)=>handleChange(e)}
            placeholder='enter email'/>
            <TextField label='password'
            variant='standard'
            name='password'
            style={{ marginBottom: '16px' }}
            onChange={(e)=>handleChange(e)}
            type='password'
            placeholder='enter password'/>
            <Button
             variant='contained'
             onClick={handleSubmit}
             type='submit' fullWidth>Login</Button>
          </FormControl>
        </Box>
        <Typography p={2} variant='body2'>
          <Link to='/register'>not a user?sign up</Link>
        </Typography>
      </Paper>
    </Grid>
    </Layout>
  )
}

export default Login