export const ControlBar = (props) => {

    function changeRootNote(event) {
        props.changeRootNote(event.target.value) 
    };

    function changeScaleType(event) {
        props.changeScaleType(event.target.value) 
        props.changeScaleIntervals(event.target.value)
    };

    function changeShowAs(event) {
        props.changeShowAs(event.target.value)
    };

    return (
        <div className='controlBar'>
            <select name={props.rootNote}  onChange={changeRootNote} className='rootSelect'>
                <option value='0'>C</option>
                <option value='1'>{(props.showAs === 'flat') ? 'D♭' : 'C♯'}</option>
                <option value='2'>D</option>
                <option value='3'>{(props.showAs === 'flat') ? 'E♭' : 'D♯'}</option>
                <option value='4'>E</option>
                <option value='5'>F</option>
                <option value='6'>{(props.showAs === 'flat')  ? 'G♭' : 'F♯'}</option>
                <option value='7'>G</option>
                <option value='8'>{(props.showAs === 'flat')  ? 'A♭' : 'G♯'}</option>
                <option value='9'>A</option>
                <option value='10'>{(props.showAs === 'flat')  ? 'B♭' : 'A♯'}</option>
                <option value='11'>B</option>
            </select>
            <select name={props.scaleType} onChange={changeScaleType} className='scaleSelect'>
                <optgroup label='Standard'>
                <option value='major'>Major</option>
                <option value='minor'>Minor</option>
                </optgroup>
                <optgroup label='Modes'>
                <option value='ionian'>Ionian</option>
                <option value='dorian'>Dorian</option>
                <option value='phyrgian'>Phrygian</option>
                <option value='lydian'>Lydian</option>
                <option value='mixolydian'>Mixolydian</option>
                <option value='aeolian'>Aeolian</option>
                <option value='locrian'>Locrian</option>
                </optgroup>
            </select>
            <label htmlFor='show-as'>Show as</label>
            <select name={props.showAs} onChange={changeShowAs} className='showAsSelect'>
                <option value='flat'>Flat</option>
                <option value='sharp'>Sharp</option>
            </select>
        </div>
    );
};
