import { noteNumberLookup } from '../utilities/noteNumberLookup.js';
import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

export const NoteSection = (props) => {

    const noteNumbers = noteNumberLookup(props.rootNote, props.scaleIntervals)

    return (
        <div className='noteSection'>
            <table>
                <thead>
                    <tr>
                        <th>
                            Root
                        </th>
                        <th>
                            2nd
                        </th>
                        <th>
                            3rd
                        </th>
                        <th>
                            4th
                        </th>
                        <th>
                            5th
                        </th>
                        <th>
                            6th
                        </th>
                        <th>
                            7th
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{noteNumberToLetter(noteNumbers[0], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[1], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[2], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[3], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[4], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[5], props.showAs)}</td>
                        <td>{noteNumberToLetter(noteNumbers[6], props.showAs)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
};

