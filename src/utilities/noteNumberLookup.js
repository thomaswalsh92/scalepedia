// this module will when provided a root note number and an nterval array produce an 
//array of values corresponding to the notes in that scale. 

export const noteNumberLookup = (rootNote, scaleIntervals) => {
    let noteNumbers = []
    let accumulator = 0
    for (let i in scaleIntervals) {
        accumulator += scaleIntervals[i]
        noteNumbers.push(rootNote + accumulator)
        console.log (`Root note is: ${rootNote}, accumulator is ${accumulator}, notenumbers current state is ${noteNumbers}.`)
    }
    return noteNumbers
}