import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

const KeyboardNote = (props) => {
    let isRootStyling = {
        opacity: '0%',
        backgroundColor: '$lightBlue',
    }
    
    const isWhiteLengthStyling = {
        gridRowStart: '1',
        gridRowEnd: '4',
        gridColumnStart: props.gridCoords.gridColumnStart,
        gridColumnEnd: props.gridCoords.gridColumnEnd
    }

    const isBlackLengthStyling = {
        gridRowStart: '1',
        gridRowEnd: '3',
        gridColumnStart: props.gridCoords.gridColumnStart,
        gridColumnEnd: props.gridCoords.gridColumnEnd
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
        className={props.isWhite ? "keyboardNoteWhite" : "keyboardNoteBlack"} 
        style={props.isWhite ? isWhiteLengthStyling : isBlackLengthStyling}
        >
            { <div 
            className="keyboardNoteHighlight"
            style={isRootStyling}>
            
            </div> }
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
    // initialises an object of grid coordinates that will be mutated
    // according to the keys.
    let gridCoords = {
        gridColumnStart: 0,
        gridColumnEnd: 0,
        }

    //below code loops according to props.length param, and initialises
    //an empty noteObject which will later be pushed into an array to
    //to be mapped into the keyboard component.
    for (let i = 0; i < props.length; i++) {
        let noteObject = {
            isWhite: null,
            isRoot: false,
            isScaleNotRoot: false,
            noteNumber: null,
            gridCoords: {
                gridColumnStart: '',
                gridColumnEnd: ''
            }
        }
        // gives a noteNumber that should correspond with standard
        // note number in the app C is 0, D is 2 etc. 
        noteObject.noteNumber = i % 12

        // checks the props.length iteration against the octaveKeyIsWhite
        // array, and sets the note object isWhite property 
        // accordingly.
        if (octaveKeyIsWhite[i % 12] === true) {
            noteObject.isWhite = true
        } else {
            noteObject.isWhite = false
        };
        
        // this code increments the values in gridCoords according to whether the
        // note is the first note, a black note following a white note (or vice-versa)
        // or a white note following a white (e.g E to F). Coords are used to provide 
        // values to the keyboardNote components grid styling to create a keyboard effect. 
        if ((gridCoords.gridColumnStart === 0) && (gridCoords.gridColumnEnd === 0)) {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart = 1
            noteObject.gridCoords.gridColumnEnd = gridCoords.gridColumnEnd = 6
        } 
        else if ((octaveKeyIsWhite[i % 12] === true) && ((octaveKeyIsWhite[(i % 12) - 1] === true)) || (octaveKeyIsWhite[(i % 12) - 1] === undefined)) {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart += 6
            noteObject.gridCoords.gridColumnEnd = gridCoords.gridColumnEnd += 6
        } else  {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart += 3
            noteObject.gridCoords.gridColumnEnd =gridCoords.gridColumnEnd += 3
        };

        // for each loop of props.length, this loop checks if 
        // I (same as noteNumber) matches with any of the props.noteNumbers
        // array held in state. If it matches at index 0 in props.noteNumbers,
        // this is the root and the isRoot property updated accordingly.
        // else if the match it's at any other index position, the 
        // isScaleNotRoot property updated accordingly. 
        for (let j = 0; j < props.noteNumbers.length; j++) {
            if ((i % 12) === props.noteNumbers[j] && j === 0) {
                noteObject.isRoot = true
            } 
            else if ((i % 12) === props.noteNumbers[j]) {
                noteObject.isScaleNotRoot = true
            }
        }
        // each noteObject is pushed to the keyboardNotes array which
        // will be return as a keyboard note component using .map. The object 
        // properties will be used to correctly format these.
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
            gridCoords={keyboardNote.gridCoords}
            />))} 
        </div>
    )
}