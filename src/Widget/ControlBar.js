export const controlBar = () => {
    return (
        <div className='controlBar'>
            <label for='root'>Root</label>
            <select name='root' className='rootSelect'>
            </select>
            <label for='scale'>Scale</label>
            <select name='scale' className='scaleSelect'>
            </select>
        </div>
    )
}