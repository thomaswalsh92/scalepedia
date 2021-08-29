import { ControlBar } from './ControlBar.js'
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
            <p>This is the widget section and root note is: {props.rootNote}, the scale type is {props.scaleType} and the intervals data is {props.scaleIntervals}. The note numbers are {props.noteNumbers}.</p>
            <NoteSection 
            rootNote={props.rootNote}
            scaleIntervals={props.scaleIntervals} 
            showAs={props.showAs}
            />
        </div>
    );
};
