"use client";
import logo from '@images/paper_background.jpeg';
import React from 'react';
import Notebook from './Notebook';

const App = () => {
  return (
    <div className='h-full overflow-hidden m-0 overscroll-none' >
      <div
        className='flex flex-col justify-center min-h-full bg-repeat bg-top'
        style={{ backgroundImage: `url(${logo})`, backgroundSize: 'auto' }}
      >
        <Notebook />
      </div>
    </div>
  )
};

export default App;
