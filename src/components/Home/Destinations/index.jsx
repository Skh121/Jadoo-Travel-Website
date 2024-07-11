import React from 'react'
import Nav from '../../Pages/Nav'
import Footer from '../Footer'
import DestinationsBack from '../../Pages/DestinationsBack'

const Destinations = () => {
  return (
    <>
    <div className='destinations-nav'>
        <Nav/>
    </div>
    <div>
    <DestinationsBack/>
    <Footer/>
    </div>
    </>
  )
}

export default Destinations