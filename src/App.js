import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import Main from './Components/Main/Main';
import Feature from './Components/feature/Feature';
import FreeProducts from './Components/freeProducts/FreeProducts';
import Footer from './Components/footer/Footer';
function App() {
  
  return (
    <div className="app">
    <Navbar/>
    <Main/>
    <Feature/>
    <FreeProducts/>
    <Footer/> 
   </div>
  );
}

export default App;


