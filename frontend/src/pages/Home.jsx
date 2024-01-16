import React from 'react'
import Layout from '../components/Layout'
import { Box, Paper, Typography } from '@mui/material'

function Home() {
  return (
    <Layout>
      <Box sx={{marginTop:10}}>
        <Paper elevation={9} sx={{bgcolor:'#bcceeb',margin:'10px auto',width:400,height:300}}>
          <Typography textAlign='center'>Home page</Typography>
        </Paper>
      </Box>
    </Layout>
  )
}

export default Home