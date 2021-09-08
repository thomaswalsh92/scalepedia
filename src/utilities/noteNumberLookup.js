// this module will when provided a root note number and an nterval array produce an 
//array of values corresponding to the notes in that scale. 

export const noteNumberLookup = (rootNote, scaleIntervals) => {
    //console.log (`calling noteNumberLook up and the root note is: ${rootNote}, scaleIntervals is ${scaleIntervals}`)
    let noteNumbers = []
    let accumulator = 0
    for (let i in scaleIntervals) {
        accumulator += parseInt(scaleIntervals[i])
        noteNumbers.push((parseInt(rootNote) + accumulator) % 12)
    }
    return noteNumbers
};