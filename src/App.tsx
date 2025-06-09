import { useState } from 'react'
import Navbar from './assets/components/navbar/NavBar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Convert from './assets/components/convertTab/Convert';
function App() {

  return (
    <main className='app'>
      <Navbar/>
      <div className='content-window'>
    <div className='tab-content'>
    <Routes>
      <Route path='/convert' element={<Convert/>}/>
      <Route path='/convert' element={<>yo</>}/>
      <Route path='/convert' element={<>yo</>}/>

    </Routes>
    </div>
      </div>
    
    </main>
  )

}

export default App
