import { KeyboardNote } from '../Widget/KeyboardNote.js'

const octaveKeyIsWhite = [true, false, true, false, true, true, false, true, false, true, false, true]

export const ChordKeyboard = (props) => {
    // this array will be filled with noteObjects that will then be mapped into KeyboardNote components
    let keyboardNotes = []
    let keyboardStart = 0
    let keyboardLength = 17
    let gridCoords = {
        gridColumnStart: 0,
        gridColumnEnd: 0,
        }
    
    // code branches based on if it needs to be a C block or F block chord. 
    //All chords starting between C and E will be C block, F to B will be F block.
    if (props.root > 4) {
        keyboardStart = 5
        keyboardLength = 19
    }

    //below code loops according to props.length param, and initialises
    //an empty noteObject which will later be pushed into an array to
    //to be mapped into the keyboard component.
    for (let i = 0; i < keyboardLength; i++) {
        let noteObject = {
            isWhite: null,
            isRoot: false,
            isThird: false,
            isFifth: false,
            noteNumber: null,
            gridCoords: {
                gridColumnStart: '',
                gridColumnEnd: ''
            }
        }
        
        // gives a noteNumber that should correspond with standard
        // note number in the app C is 0, D is 2 etc. 
        noteObject.noteNumber = i + keyboardStart % 12

        // checks the props.length iteration against the octaveKeyIsWhite
        // array, and sets the note object isWhite property 
        // accordingly.
        if (octaveKeyIsWhite[(i + keyboardStart) % 12] === true) {
            noteObject.isWhite = true
        } else {
            noteObject.isWhite = false
        };

        // this code increments the values in gridCoords according to whether the
        // note is the first note, a white note following a white (B to C, E to F)
        // or a black note following a white note (or vice-versa). Coords values are 
        // taken in the note object in each i increment and maps these values to the 
        // keyboardNote components allowing correct CSS grid values to be computed.
        if (((gridCoords.gridColumnStart) === 0) && ((gridCoords.gridColumnEnd) === 0)) {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart = 1
            noteObject.gridCoords.gridColumnEnd = gridCoords.gridColumnEnd = 6
        } 
        else if ((octaveKeyIsWhite[(i + keyboardStart) % 12] === true) && ((octaveKeyIsWhite[((i + keyboardStart) % 12) - 1] === true)) || (octaveKeyIsWhite[((i + keyboardStart) % 12) - 1] === undefined)) {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart += 6
            noteObject.gridCoords.gridColumnEnd = gridCoords.gridColumnEnd += 6
        } else  {
            noteObject.gridCoords.gridColumnStart = gridCoords.gridColumnStart += 3
            noteObject.gridCoords.gridColumnEnd =gridCoords.gridColumnEnd += 3
        };

        // for each loop of props.length, this loop checks if 
        // i (same as noteNumber) matches with any of the props.noteNumbers
        // array held in state. If it matches at index 0 in props.noteNumbers,
        // this is the root and the isRoot property updated accordingly.
        // else if the match it's at any other index position, the 
        // isScaleNotRoot property updated accordingly. 

/*         for (let j = 0; j < keyboardLength; j++) {
            if ((i % 12) === props.root) {
                noteObject.isRoot = true
            } 
            else if ((i % 12) === props.third || props.fifth) {
                noteObject.isScaleNotRoot = true
            } 
        } */
        // each noteObject is pushed to the keyboardNotes array which
        // will be return as a keyboard note component using .map. The object 
        // properties will be used to correctly format these.
        keyboardNotes.push(noteObject)
    } 
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