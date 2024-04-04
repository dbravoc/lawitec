import React from 'react'
import './output.css'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ContractRequest from './components/request/ContractRequest'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
            <div className="bg-blue-500 text-white">Hola Mundo</div>

      } />

        <Route path="/request" element={<ContractRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
