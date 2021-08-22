
import './fonts.css'
import './App.scss';
import React, { useState } from 'react';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { Widget } from './Widget/Widget';


function App() {

  const [rootNote, setRootNote ] = React.useState('C')
  const [scaleType, setScaleType ] = React.useState('Major')

  function changeRootNote(newRootNote) {
    setRootNote(newRootNote);
  }

  function changeScaleType (newScaleType) {
    setScaleType(newScaleType);
  }

  return (
    <div className='app'>
    <NavBar />
    <Hero />
      <div className='main'>
      <Widget rootNote={rootNote} changeRootNote={changeRootNote} scaleType={scaleType} changeScaleType={changeScaleType} />
      </div>
    </div>
  );
}

export default App;
