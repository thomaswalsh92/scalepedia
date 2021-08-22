import { ControlBar } from './ControlBar.js'
import { NoteSection } from './NoteSection.js'

export const Widget = (props) => {
    return (
        <div className='widget'>
            <ControlBar rootNote={props.rootNote} changeRootNote={props.changeRootNote} scaleType={props.scaleType} changeScaleType={props.changeScaleType} />
            <p>This is the widget section and root note is: {props.rootNote}, the scale type is {props.scaleType}.</p>
        </div>
    )

}
