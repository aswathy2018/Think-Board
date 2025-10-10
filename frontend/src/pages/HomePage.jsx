import React, { useState } from 'react'
import Navbar from '../components/NavBar'
import RateLimited from '../components/RateLimited'

const HomePage = () => {
  const {isRateLimited, setIsRateLimited} = useState(true)
  return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimited/>}
    </div>
  )
}

export default HomePage