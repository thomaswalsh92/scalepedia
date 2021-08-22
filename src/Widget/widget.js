import { controlBar } from './controlBar.js'
import { noteSection } from './noteSection.js'

export const widget = () => {
    return (
        <div className='widget'>
            {controlBar()}
            <p>Keyboard section</p>
            {noteSection()}
        </div>
    )

}
