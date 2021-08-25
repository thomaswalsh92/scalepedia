export const intervalLookup = (scaleType) => {
    const intervalTable = [
        { scaleType: 'major', 
          intervals: [2, 2, 1, 2, 2, 2, 1]
        },
        { scaleType: 'minor', 
          intervals: [2, 1, 2, 2, 2, 1, 2]
        },
    ]
    for (const i in intervalTable) {
        if (scaleType === intervalTable[i].scaleType) {
            return intervalTable[i].intervals
        }
    }
}

