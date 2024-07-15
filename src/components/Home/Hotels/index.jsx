import React from 'react'
import HotelsBack from '../../Pages/HotelsBack'
import Nav from '../../Pages/Nav'
import Footer from '../Footer'

const Hotels = () => {
  return (
    <>
    <div className="destinations-nav">
      <Nav />
    </div>
    <div>
      <HotelsBack/>
      <Footer />
    </div>
  </>
  )
}

export default Hotels