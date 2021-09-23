
import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

export const ScaleNoteSection = (props) => {

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
                    <div className="scaleNote">
                        <p>4th</p>
                    </div>
                    <div className="scaleNote">
                        <p>5th</p>
                    </div>
                    <div className="scaleNote">
                        <p>6th</p>
                    </div>
                    <div className="scaleNote">
                        <p>7th</p>
                    </div>
                </div>
                <div className="tableData">
                    <div><p>{noteNumberToLetter(props.noteNumbers[0], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[1], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[2], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[3], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[4], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[5], props.showAs)}</p></div>
                    <div><p>{noteNumberToLetter(props.noteNumbers[6], props.showAs)}</p></div>
                </div>
            </div>
        </div>
      );
};

