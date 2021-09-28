import { ControlBar } from './ControlBar.js'
import { Chord } from './Chord.js'
import { noteNumberLookup } from '../utilities/noteNumberLookup.js';


// this components needs to take the note numbers, create an array of chord objects
// this array of chord objects is then .mapped into the chordWidget return statement.
export const ChordsWidget = (props) => {
    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)
    let chordsArr = []

    for (let i = 0; i < noteNumbers.length; i++) {
        let chordObject = {
            root: noteNumbers[i % 7],
            third: noteNumbers[(i + 2) % 7],
            fifth: noteNumbers[(i + 4) % 7]
        }
        chordsArr.push(chordObject)
    }

    return (
        <div className='widget' id='chords'>
            <ControlBar 
            label={'Chords'}
            showControls={false}
            />
            <div className='chordContainer'>
            {chordsArr.map((chord, x) => (
            <Chord
            key={x} 
            chordNumber={x}
            showAs={props.showAs}
            root={chord.root}
            third={chord.third}
            fifth={chord.fifth}
            />))} 
            </div>
        </div>
    );
};