export const ControlBar = (props) => {

    function changeRootNote(event) {
        props.changeRootNote(event.target.value) 
    }

    function changeScaleType(event) {
        props.changeScaleType(event.target.value) 
    }

    return (
        <div className='controlBar'>
            <label for='root'>Root</label>
            <select name={props.rootNote}  onChange={changeRootNote} className='rootSelect'>
                <option value='C'>C</option>
                <option value='D'>D</option>
                <option value='E'>E</option>
                <option value='F'>F</option>
                <option value='G'>G</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
            </select>
            <label for='scale'>Scale</label>
            <select name={props.scaleType} onChange={changeScaleType} className='scaleSelect'>
                <option value='major'>Major</option>
                <option value='minor'>Minor</option>
            </select>
        </div>
    )
}
