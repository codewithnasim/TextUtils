import logo from './logo.svg';
import './App.css';
import Navbar from './NavebarPage/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // const[btnText,setBtnText]=useState("eneble dark mode")
      const[mode,setMode]=useState("light");
      const togglemode=()=>{
        setMode('light')
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor="#042743"
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white';
      }
      }


  return (
    <>
     <Navbar  mode={mode} togglemode={togglemode}/>
      <TextForm mode={mode} togglemode={togglemode}/>
     
    </>



  );
}
export default App;
