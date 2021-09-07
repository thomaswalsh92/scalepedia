export const intervalLookup = (scaleType) => {
    const intervalTable = [
        { scaleType: 'major', 
          intervals: [0, 2, 2, 1, 2, 2, 2]
        },
        { scaleType: 'minor', 
          intervals: [0, 2, 1, 2, 2, 1, 2]
        },
    ]
    for (const i in intervalTable) {
        if (scaleType === intervalTable[i].scaleType) {
            return intervalTable[i].intervals
        }
    }
}

