
import './fonts.css'
import './App.scss';
import React, { useState } from 'react';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { Widget } from './Widget/Widget';
import { intervalLookup } from './utilities.js'



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
      <p>At App.js level the root note is {rootNote} and scale type is {scaleType}.</p>
      </div>
    </div>
  );
}

export default App;
