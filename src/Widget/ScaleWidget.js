import { ControlBar } from './ControlBar.js'
import { ScaleKeyboard } from './ScaleKeyboard.js'
import { ScaleNoteSection } from './ScaleNoteSection.js'
import { noteNumberLookup } from '../utilities/noteNumberLookup.js';



export const ScaleWidget = (props) => {
    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)
    return (
        <div className='widget'>
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
            mode='scale'
            length="24" 
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
