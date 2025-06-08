import { useState } from 'react'
import Navbar from './assets/components/Navbar/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className='app'>
      <Navbar/>
      <div className='content-window'>
    <div className='tab-content'>
    <Routes>
      <Route path='/convert' element={<>yo</>}/>
      <Route path='/convert' element={<>yo</>}/>
      <Route path='/convert' element={<>yo</>}/>

    </Routes>
    </div>
      </div>
    
    </main>
  )

}

export default App
