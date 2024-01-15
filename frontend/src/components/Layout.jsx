import React from 'react'
import Header from './Header'
import { Toaster } from 'react-hot-toast'

function Layout({children}) {
  return (
    <>
      <Header/>
      <Toaster/>
      {children}
    </>
  )
}

export default Layout