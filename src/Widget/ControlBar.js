export const controlBar = () => {
    return (
        <div className='control-bar'>
            <label for='root'>Root</label>
            <select name='root' className='root-select'>
            </select>
            <label for='scale'>Scale</label>
            <select name='scale' className='scale-select'>
            </select>
        </div>
    )
}