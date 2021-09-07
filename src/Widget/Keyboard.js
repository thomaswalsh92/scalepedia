const KeyboardNote = (props) => {
    let keyColor 

    if (props.isWhite === true) {
        keyColor = 'white'
    } 
    else { 
        keyColor = 'black'
    };

    return (
        <div><p>I am a {keyColor} key.</p></div>
    );

}

// aligns note values with black keys on keyboard.
const octaveKeyIsWhite = [true, false, true, false, true, true, false, true, false, true, false, true]

// keyboard takes the state notes array, a start position 
// and a length param and creates a keyboard graphic.
export const Keyboard = (props) => {

    let keyboardNotes = []
 
    for (let i = 0; i < props.length; i++) {
        let noteObject = {
            isWhite: null
        }
        if (octaveKeyIsWhite[i] === true) {
            noteObject.isWhite = true
        } else {
            noteObject.isWhite = false
        };
        keyboardNotes.push(noteObject)
    };

    return (
        <div>
            {keyboardNotes.map((keyboardNote, x) => (<KeyboardNote key={x} isWhite={keyboardNote.isWhite}/>))} 
        
        </div>
    )
}