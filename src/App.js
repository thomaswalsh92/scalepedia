
import './fonts.css'
import './App.scss';
import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { Widget } from './Widget/Widget';
import { intervalLookup } from './utilities/intervalLookup.js'
import { noteNumberLookup } from './utilities/noteNumberLookup.js'

function App() {
  const initRootNote = 'C'
  const initScaleType = 'major'

  const [rootNote, setRootNote ] = React.useState(initRootNote)
  const [scaleType, setScaleType ] = React.useState(initScaleType)
  const [scaleIntervals, setScaleIntervals ] = React.useState(intervalLookup(initScaleType))
  
  function changeRootNote(newRootNote) {
    setRootNote(newRootNote);
  }

  function changeScaleType (newScaleType) {
    setScaleType(newScaleType);
    setScaleIntervals(intervalLookup(newScaleType));
  }

  useEffect(() => console.log (noteNumberLookup(0, scaleIntervals)),);

  return (
    <div className='app'>
    <NavBar />
    <Hero />
      <div className='main'>
      <Widget rootNote={rootNote} changeRootNote={changeRootNote} scaleType={scaleType} changeScaleType={changeScaleType} />
      <p>At App.js level the root note is {rootNote} and scale type is {scaleType}.</p>
      <p>The interval data is: {scaleIntervals}.</p>
      </div>
    </div>
  );
};

export default App;
