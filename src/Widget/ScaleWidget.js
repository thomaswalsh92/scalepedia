import { ControlBar } from './ControlBar.js'
import { ScaleKeyboard } from './ScaleKeyboard.js'
import { ScaleNoteSection } from './ScaleNoteSection.js'
import { noteNumberLookup } from '../utilities/noteNumberLookup.js';

let keyboardLength = '24'


// eslint-disable-next-line no-restricted-globals
let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

if (width >= 768) {
    keyboardLength = '36'
}

if (width >= 1201) {
    keyboardLength = '48'
}



export const ScaleWidget = (props) => {
    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)

    return (
        <div className='widget' id='scale'>
            <ControlBar 
            label={'Scales'}
            showControls={true}
            rootNote={props.rootNote} 
            changeRootNote={props.changeRootNote} 
            scaleType={props.scaleType} 
            changeScaleType={props.changeScaleType}
            scaleIntervals={props.scaleIntervals}
            changeScaleIntervals={props.changeScaleIntervals}
            showAs={props.showAs}
            changeShowAs={props.changeShowAs} />
            <ScaleKeyboard 
            length={keyboardLength} 
            noteNumbers={noteNumbers} 
            showAs={props.showAs}
            />
            <ScaleNoteSection 
            showAs={props.showAs}
            noteNumbers={noteNumbers}
            /> 
        </div>
    );
};
