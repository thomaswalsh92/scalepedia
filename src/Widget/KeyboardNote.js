
export const KeyboardNote = (props) => {
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