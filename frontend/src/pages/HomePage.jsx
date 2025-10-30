import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar'
import RateLimited from '../components/RateLimited.jsx'
import NoteCard from '../components/NoteCard.jsx'
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
      <div className='max-w-7xl mx-auto p-4 mt-6'></div>
      {loading && <div className='text-center text-primary py-40'>Loading Notes..</div>}

      {notes.length>0 && !isRateLimited && (
        <div className='ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {notes.map((note) => (
            <NoteCard key={note._id} note={note}/>            
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage
