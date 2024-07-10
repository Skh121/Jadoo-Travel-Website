import React from 'react'
import { Outlet } from 'react-router-dom'
import StaffMain from './Staff/StaffMain'

const Admin = () => {
  return (
    <>
    <StaffMain/>
    <Outlet/>
    </>
  )
}

export default Admin