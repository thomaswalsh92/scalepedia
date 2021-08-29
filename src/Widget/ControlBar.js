export const ControlBar = (props) => {

    function changeRootNote(event) {
        props.changeRootNote(event.target.value) 
        props.changeNoteNumbers(event.target.value, props.scaleIntervals)
    }

    function changeScaleType(event) {
        props.changeScaleType(event.target.value) 
        props.changeScaleIntervals(event.target.value)
        props.changeNoteNumbers(props.rootNote, props.scaleIntervals)
    }

    return (
        <div className='controlBar'>
            <label htmlFor='root'>Root</label>
            <select name={props.rootNote}  onChange={changeRootNote} className='rootSelect'>
                <option value='0'>C</option>
                <option value='1'>Db/C#</option>
                <option value='2'>D</option>
                <option value='3'>Eb/D#</option>
                <option value='4'>E</option>
                <option value='5'>F</option>
                <option value='6'>Gb/F#</option>
                <option value='7'>G</option>
                <option value='8'>Ab/G#</option>
                <option value='9'>A</option>
                <option value='10'>Bb/A#</option>
                <option value='11'>B</option>
            </select>
            <label htmlFor='scale'>Scale</label>
            <select name={props.scaleType} onChange={changeScaleType} className='scaleSelect'>
                <option value='major'>Major</option>
                <option value='minor'>Minor</option>
            </select>
        </div>
    );
};
