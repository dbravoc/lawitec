import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContractRequest from './components/request/ContractRequest'
import Header from './components/Header'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<ContractRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
