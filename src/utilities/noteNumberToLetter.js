//takes a single noteNumber and returns the value as a note Letter

export const noteNumberToLetter = (noteNumber, showAs) => { 
    console.log (`the note number is ${noteNumber}, the showAs is ${showAs}`)
    if (showAs === 'flat') {
        switch (noteNumber) {
            case 0:
                return 'C';
            case 1:
                return 'D♭'
            case 2:
                return 'D';
            case 3:
                return 'E♭';
            case 4:
                return 'E';
            case 5:
                return 'F';
            case 6:
                return 'G♭';
            case 7:
                return 'G';
            case 8:
                return 'A♭';
            case 9:
                return 'A';
            case 10:
                return 'B♭';
            case 11:
                return 'B';
            default:
                console.log('Invalid noteNumber value.');
            };
    } else if (showAs === 'sharp') {
        switch (noteNumber) {
            case 0:
                return 'C';
            case 1:
                return 'C♯'
            case 2:
                return 'D';
            case 3:
                return 'D♯';
            case 4:
                return 'E';
            case 5:
                return 'F';
            case 6:
                return 'F♯';
            case 7:
                return 'G';
            case 8:
                return 'G♯';
            case 9:
                return 'A';
            case 10:
                return 'A♯';
            case 11:
                return 'B';
            default:
                console.log('Invalid noteNumber value.');
            };
    } else {
        console.log('Invalid noteNumber value.');
    };
};
