import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()
  return (
    <AppBar>
      <Toolbar>
      <Box sx={{ flex: '1' }} />
        <Box>
        <Button onClick={()=>navigate('/login')}
        variant='outlined' sx={{marginRight:1}} color='inherit'>Login</Button>
        <Button onClick={()=>navigate('/register')}
        color='inherit' variant='outlined'>SignUp</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header