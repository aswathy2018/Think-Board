import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import RateLimited from '../components/RateLimited.jsx'
import axios from 'axios'
import toast from "react-hot-toast"

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {

      try {

        const res = await axios.get("http://localhost:5001/api/notes")
        console.log(res.data)
        setNotes(res.data)
        setIsRateLimited(false)

      } catch (error) {

        console.log("Error in fetching notes in HomePage useEffect:", error)
        console.log(error);
        
        if(error.response.status===429){
          setIsRateLimited(true)
        }else{
          toast.error("Failed to import notes..")
        }

      } finally{
        setLoading(false)
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
