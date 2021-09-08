import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

const KeyboardNote = (props) => {
    let isRootStyling = {
        opacity: '0%',
        backgroundColor: '$lightBlue'
    }
    
    if (props.isRoot === true) {
        isRootStyling.opacity = '100%'
        isRootStyling.backgroundColor = '#D34242'
    } 

    if (props.isScaleNotRoot === true) {
        isRootStyling.opacity = '100%'
        isRootStyling.backgroundColor = '#FFA400'
    } 

    return (
        <div 
        className={props.isWhite ? "keyboardNoteWhite" : "keyboardNoteBlack"}>
            <div 
            className="keyboardNoteHighlight"
            style={isRootStyling}>
            
            </div>
        </div>
    );

}

// aligns note values with black keys on keyboard.
const octaveKeyIsWhite = [true, false, true, false, true, true, false, true, false, true, false, true]

// keyboard takes the state notes array, a start position 
// and a length param and creates a keyboard graphic.

// NEXT: need to add the capability to stamp when a note 
// should be highlighted as a scale note and as a root. 
export const Keyboard = (props) => {

    let keyboardNotes = []
 
    for (let i = 0; i < props.length; i++) {
        let noteObject = {
            isWhite: null,
            isRoot: false,
            isScaleNotRoot: false,
            noteNumber: null
        }
        noteObject.noteNumber = i % 12
        if (octaveKeyIsWhite[i % 12] === true) {
            noteObject.isWhite = true
        } else {
            noteObject.isWhite = false
        };
        for (let j = 0; j < props.noteNumbers.length; j++) {
            if ((i % 12) === props.noteNumbers[j] && j === 0) {
                noteObject.isRoot = true
            } 
            else if ((i % 12) === props.noteNumbers[j]) {
                noteObject.isScaleNotRoot = true
            }
        }

        keyboardNotes.push(noteObject)
    };

    return (
        <div className="keyboard">
            {keyboardNotes.map((keyboardNote, x) => (
            <KeyboardNote 
            key={x} 
            noteNumber={keyboardNote.noteNumber}
            isWhite={keyboardNote.isWhite} 
            isRoot={keyboardNote.isRoot} 
            isScaleNotRoot={keyboardNote.isScaleNotRoot}
            showAs={props.showAs}
            />))} 
        </div>
    )
}