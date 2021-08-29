import { noteNumberToLetter} from '../utilities/noteNumberToLetter.js'

export const NoteSection = (props) => {
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
                        <td>{noteNumberToLetter(props.noteNumbers[0])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[1])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[2])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[3])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[4])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[5])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[6])}</td>
                        <td>{noteNumberToLetter(props.noteNumbers[7])}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
};

