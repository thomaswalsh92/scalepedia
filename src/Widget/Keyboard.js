import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

const KeyboardNote = (props) => {
    let keyColor
    let isRoot
    let isScaleNotRoot

    if (props.isWhite === true) {
        keyColor = 'white'
    } 
    else { 
        keyColor = 'black'
    }; 

    if (props.isRoot === true) {
        isRoot = 'true'
    } 
    else { 
        isRoot = 'false'
    }; 

    if (props.isScaleNotRoot === true) {
        isScaleNotRoot = 'true'
    } 
    else { 
        isScaleNotRoot = 'false'
    }; 
    

    return (
        <div><p>Note: {noteNumberToLetter(props.noteNumber, props.showAs)} ||  Key Color: {keyColor} ||  Root Note: {isRoot} || Scale Note: {isScaleNotRoot}</p></div>
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
        noteObject.noteNumber = i
        if (octaveKeyIsWhite[i] === true) {
            noteObject.isWhite = true
        } else {
            noteObject.isWhite = false
        };
        for (let j = 0; j < props.noteNumbers.length; j++) {
            if (i === props.noteNumbers[j] && j === 0) {
                noteObject.isRoot = true
            } 
            else if (i === props.noteNumbers[j]) {
                noteObject.isScaleNotRoot = true
            }
        }

        keyboardNotes.push(noteObject)
    };

    console.log (props.noteNumbers)

    return (
        <div>
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