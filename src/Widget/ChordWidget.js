import { ControlBar } from './ControlBar.js'
import { Keyboard } from './Keyboard.js'
import { NoteSection } from './NoteSection.js'
import { noteNumberLookup } from '../utilities/noteNumberLookup.js';



export const ChordWidget = (props) => {
    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)
    return (
        <div className='widget'>
            <ControlBar 
            title={'Chord'}
            />
            <Keyboard 
            length="24" 
            noteNumbers={noteNumbers} 
            showAs={props.showAs}
            />
            {<NoteSection 
            showAs={props.showAs}
            noteNumbers={noteNumbers}
            /> }
        </div>
    );
};