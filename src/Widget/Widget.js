import { ControlBar } from './ControlBar.js'
import { Keyboard } from './Keyboard.js'
import { NoteSection } from './NoteSection.js'

export const Widget = (props) => {
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
            {/* <NoteSection 
            rootNote={props.rootNote}
            scaleIntervals={props.scaleIntervals} 
            showAs={props.showAs}
            /> */}
            <Keyboard length="12"/>
        </div>
    );
};
