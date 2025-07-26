"use client";
import logo from '@images/paper_background.jpeg';
import React from 'react';
import Notebook from './Notebook';

const App = () => {
  return (
    <div
      className='flex min-h-screen flex-col justify-center py-6 sm:py-12 bg-cover bg-center min-h-screen overflow-hidden'
      style={{ backgroundImage: `url(${logo})` }}
    >
      <Notebook />
    </div>
  )
};

export default App;
