export const intervalLookup = (scaleType) => {
    const intervalLookup = [
        { scaleType: 'major', 
          intervals: [2, 2, 1, 2, 2, 2, 1]
        },
        { scaleType: 'minor', 
          intervals: [2, 1, 2, 2, 2, 1, 2]
        },
    ]
    for (const i in intervalLookup) {
        if (scaleType === intervalLookup[i].scaleType) {
            return intervalLookup[i].intervals
        }
    }
}