"use client";
import logo from '@images/paper_background.jpeg';
import React from 'react';
import Notebook from './Notebook';

const App = () => {
  return (
    <div
      className='flex flex-col justify-center bg-cover bg-center min-h-screen overflow-hidden'
      style={{ backgroundImage: `url(${logo})` }}
    >
      <Notebook />
    </div>
  )
};

export default App;
