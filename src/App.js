
import './fonts.css'
import './App.scss';
import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { ScaleWidget } from './Widget/ScaleWidget';
import { intervalLookup } from './utilities/intervalLookup.js'

//Initial variables required to ensure app loads with required data. Dirty but works. 
const initRootNote = 0
const initScaleType = 'major'
const initScaleIntervals = intervalLookup(initScaleType)
const initShowAs = 'flat'

function App() {

  const [rootNote, setRootNote ] = React.useState(initRootNote)
  const [scaleType, setScaleType ] = React.useState(initScaleType)
  const [scaleIntervals, setScaleIntervals ] = React.useState(initScaleIntervals)
  const [showAs, setShowAs ] = React.useState(initShowAs)
  
  function changeRootNote(newRootNote) {
    setRootNote(newRootNote);
  }

  function changeScaleType (newScaleType) {
    setScaleType(newScaleType);
  }

  function changeScaleIntervals (newRootNote) {
    setScaleIntervals(intervalLookup(newRootNote));
  }

  function changeShowAs (newShowAs) {
    setShowAs(newShowAs);
  }


  return (
    <div className='app'>
    <NavBar />
    <Hero />
      <div className='main'>
        <ScaleWidget 
        rootNote={rootNote} 
        changeRootNote={changeRootNote} 
        scaleType={scaleType} 
        changeScaleType={changeScaleType} 
        scaleIntervals={scaleIntervals}
        changeScaleIntervals={changeScaleIntervals}
        showAs={showAs}
        changeShowAs={changeShowAs}
        />
      </div>
    </div>
  );
};

export default App;