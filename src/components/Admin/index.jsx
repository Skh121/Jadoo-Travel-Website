import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <>
    <div>Hello Admin</div>
    <Outlet/>
    </>
  )
}

export default Admin