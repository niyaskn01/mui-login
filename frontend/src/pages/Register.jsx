import React, { useState } from 'react'
import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axios/axios'
import Layout from '../components/Layout'
import toast from 'react-hot-toast'

function Register() {
  const paperStyle={
    padding:10,
    width:'25%',
    margin:"120px auto",
    textAlign:"center"
  }

  const [formData,setFormData]=useState({
    name:"",
    email:'',
    password:''
  })
  const navigate=useNavigate()
  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const {data}=await axiosInstance.post('/user/register',{
        ...formData
      })
      if(data?.success){
        navigate('/')
        setTimeout(() => {
          toast.success(data.message)
        }, 300);
        
      }else{
        toast.error(data.message)
      } 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
    <Grid>
      <Paper elevation={7} style={paperStyle}>
        <Typography variant='h5'>
          Sign Up
        </Typography>
        <Box>
          <FormControl>
            
            <TextField label='name' 
            variant='standard'
            style={{ marginBottom: '16px' }}
            onChange={(e)=>handleChange(e)}
            name='name'
            placeholder='enter username'/>
            <TextField label='email' 
            type='email'
            variant='standard'
            style={{ marginBottom: '16px' }}
            onChange={(e)=>handleChange(e)}
            name='email'
            placeholder='enter email'/>
            <TextField label='password'
            variant='standard'
            style={{ marginBottom: '16px' }}
            onChange={(e)=>handleChange(e)}
            type='password'
            name='password'
            placeholder='enter password'/>
            <Button
             variant='contained'
             onClick={handleSubmit}
             type='submit' fullWidth>Sign Up</Button>
          </FormControl>
          <Typography p={2} variant='body2'>
            <Link to='/login'>All ready a user? login</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
    </Layout>
  )
}

export default Register