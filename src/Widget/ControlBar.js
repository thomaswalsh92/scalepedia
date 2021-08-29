export const ControlBar = (props) => {

    function changeRootNote(event) {
        props.changeRootNote(event.target.value) 
    }

    function changeScaleType(event) {
        props.changeScaleType(event.target.value) 
        props.changeScaleIntervals(event.target.value)
    }

    function changeShowAs(event) {
        props.changeShowAs(event.target.value)
    }

    return (
        <div className='controlBar'>
            <label htmlFor='root'>Root</label>
            <select name={props.rootNote}  onChange={changeRootNote} className='rootSelect'>
                <option value='0'>C</option>
                <option value='1'>{(props.showAs === 'flat') ? 'Db' : 'C#'}</option>
                <option value='2'>D</option>
                <option value='3'>{(props.showAs === 'flat') ? 'Eb' : 'D#'}</option>
                <option value='4'>E</option>
                <option value='5'>F</option>
                <option value='6'>{(props.showAs === 'flat')  ? 'Gb' : 'F#'}</option>
                <option value='7'>G</option>
                <option value='8'>{(props.showAs === 'flat')  ? 'Ab' : 'G#'}</option>
                <option value='9'>A</option>
                <option value='10'>{(props.showAs === 'flat')  ? 'Bb' : 'A#'}</option>
                <option value='11'>B</option>
            </select>
            <label htmlFor='scale'>Scale</label>
            <select name={props.scaleType} onChange={changeScaleType} className='scaleSelect'>
                <option value='major'>Major</option>
                <option value='minor'>Minor</option>
            </select>
            <label htmlFor='show-as'>Show as</label>
            <select name={props.showAs} onChange={changeShowAs} className='showAsSelect'>
                <option value='flat'>Flat</option>
                <option value='sharp'>Sharp</option>
            </select>
        </div>
    );
};
