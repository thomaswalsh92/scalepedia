

export const intervalLookup = (scaleType) => {
    const intervalTable = [
        { scaleType: 'major', 
          intervals: [0, 2, 2, 1, 2, 2, 2]
        },
        { scaleType: 'minor', 
          intervals: [0, 2, 1, 2, 2, 1, 2]
        },
        { scaleType: 'ionian', 
          intervals: [0, 2, 2, 1, 2, 2, 2]
        },
        { scaleType: 'dorian', 
          intervals: [0, 2, 1, 2, 2, 2, 1]
        },
        { scaleType: 'phyrgian', 
          intervals: [0, 1, 2, 2, 2, 1, 2]
        },
        { scaleType: 'lydian', 
          intervals: [0, 2, 2, 2, 1, 2, 2]
        },
        { scaleType: 'mixolydian', 
          intervals: [0, 2, 2, 1, 2, 2, 1]
        },
        { scaleType: 'aeolian', 
          intervals: [0, 2, 1, 2, 2, 1, 2]
        },
        { scaleType: 'locrian', 
          intervals: [0, 1, 2, 2, 1, 2, 2]
        },
    ]
    for (const i in intervalTable) {
        if (scaleType === intervalTable[i].scaleType) {
            return intervalTable[i].intervals
        }
    }
}

