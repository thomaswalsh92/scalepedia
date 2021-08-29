
import './fonts.css'
import './App.scss';
import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { Widget } from './Widget/Widget';
import { intervalLookup } from './utilities/intervalLookup.js'

//Initial variables required to ensure app loads with required data. Dirty but works. 
const initRootNote = 0
const initScaleType = 'major'
const initScaleIntervals = intervalLookup(initScaleType)

function App() {

  const [rootNote, setRootNote ] = React.useState(initRootNote)
  const [scaleType, setScaleType ] = React.useState(initScaleType)
  const [scaleIntervals, setScaleIntervals ] = React.useState(initScaleIntervals)
  
  function changeRootNote(newRootNote) {
    setRootNote(newRootNote);
  }

  function changeScaleType (newScaleType) {
    setScaleType(newScaleType);
  }

  function changeScaleIntervals (newRootNote) {
    setScaleIntervals(intervalLookup(newRootNote));
  }


  return (
    <div className='app'>
    <NavBar />
    <Hero />
      <div className='main'>
      <Widget 
      rootNote={rootNote} 
      changeRootNote={changeRootNote} 
      scaleType={scaleType} 
      changeScaleType={changeScaleType} 
      scaleIntervals={scaleIntervals}
      changeScaleIntervals={changeScaleIntervals}
      />
      <p>At App.js level the root note is {rootNote} and scale type is {scaleType}.</p>
      <p>The interval data is: {scaleIntervals}.</p>
      </div>
    </div>
  );
};

export default App;
