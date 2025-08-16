"use client";
import logo from '@images/paper_background.jpeg';
import React from 'react';
import Notebook from './Notebook';
import TopBanner from '@components/TopBanner';

const App = () => {
  return (
    <div className='h-full overflow-hidden m-0 overscroll-none' >
      <div
        className='flex flex-col justify-center bg-cover bg-center min-h-full'
        style={{ backgroundImage: `url(${logo})` }}
      >
        <Notebook />
      </div>
    </div>
  )
};

export default App;
