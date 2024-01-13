import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css'
const App = () => {
  return (
    <div className=''>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;