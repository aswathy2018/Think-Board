import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import RateLimited from '../components/RateLimited.jsx'
import axios from 'axios'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
      } catch (error) {
        console.log("Error in fetching notes in HomePage useEffect:", error)
      }
    }

    fetchNotes()
  }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimited />}
    </div>
  )
}

export default HomePage
