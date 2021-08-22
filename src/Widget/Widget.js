import { controlBar } from './ControlBar.js'

export const widget = () => {
    return (
        <div className='widget'>
            {controlBar()}
            <p>Keyboard section</p>
            <p>Note section</p>
        </div>
    )

}