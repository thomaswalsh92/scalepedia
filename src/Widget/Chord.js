import { ChordNoteSection } from "./ChordNoteSection"
import { ChordKeyboard } from "./ChordKeyboard"

export const Chord = (props) => {
    return (
        <div className='chord'>
            {<ChordKeyboard 
            length='12'
            root={props.root} 
            third={props.third}
            fifth={props.fifth}
            />}
            <ChordNoteSection 
            showAs={props.showAs}
            root={props.root} 
            third={props.third}
            fifth={props.fifth}
            chordNumber={props.chordNumber}
            />
        </div>
    )
}