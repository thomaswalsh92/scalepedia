import { ControlBar } from './ControlBar.js'
import { NoteSection } from './NoteSection.js'

export const Widget = () => {
    return (
        <div className='widget'>
            <ControlBar />
            <p>Keyboard section</p>
            <NoteSection />
        </div>
    )

}
