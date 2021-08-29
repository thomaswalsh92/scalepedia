//takes a single noteNumber and returns the value as a note Letter

export const noteNumberToLetter = (noteNumber) => { 
    switch (noteNumber) {
        case 0:
            return 'C';
        case 1:
            return 'Db';
        case 2:
            return 'D';
        case 3:
            return 'Eb';
        case 4:
            return 'E';
        case 5:
            return 'F';
        case 6:
            return 'Gb';
        case 7:
            return 'G';
        case 8:
            return 'Ab';
        case 9:
            return 'A';
        case 10:
            return 'Bb';
        case 11:
            return 'B';
        default:
            console.log('Invalid noteNumber value.');
        };
};
