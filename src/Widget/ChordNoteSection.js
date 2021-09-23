
import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

export const ChordNoteSection = (props) => {

    return (
        <div className='noteSection'>
            <div className='noteSectionTable'>
                <div className="tableHeader">
                    <div className="rootNote">
                        <p>Rt.</p>
                    </div>
                    <div className="scaleNote">
                        <p>2nd</p>
                    </div>
                    <div className="scaleNote">
                        <p>3rd</p>
                    </div>            
                </div>
                <div className="tableData">
                    <div><p>{noteNumberToLetter(props.root, props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.third, props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.fifth, props.showAs)}</p></div>
                </div>
            </div>
        </div>
    );
};

