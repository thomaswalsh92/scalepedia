import { ControlBar } from './ControlBar.js'
import { Keyboard } from './Keyboard.js'
import { NoteSection } from './NoteSection.js'
import { noteNumberLookup } from '../utilities/noteNumberLookup.js';



export const Widget = (props) => {
    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)

    return (
        <div className='widget'>
            <ControlBar 
            rootNote={props.rootNote} 
            changeRootNote={props.changeRootNote} 
            scaleType={props.scaleType} 
            changeScaleType={props.changeScaleType}
            scaleIntervals={props.scaleIntervals}
            changeScaleIntervals={props.changeScaleIntervals}
            showAs={props.showAs}
            changeShowAs={props.changeShowAs} />
            <NoteSection 
            showAs={props.showAs}
            noteNumbers={noteNumbers}
            />
            <Keyboard 
            length="12" 
            noteNumbers={noteNumbers} 
            showAs={props.showAs}
            />
        </div>
    );
};
