import React from 'react'
import {Route, Routes} from "react-router"

import HomePage  from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailePage from './pages/NoteDetailePage'


const App = () => {
  return (
    <div data-theme="halloween" className="min-h-screen bg-base-200">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailePage />} />
      </Routes>
    </div>
  )
}

export default App