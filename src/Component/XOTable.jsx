import usePlay from "../hooks/use-play";
import InputXO from "./InputXO";

export default function XOTable() {
    const { endLength, inputData } = usePlay()

    const lengthStyle = {
        width: '100%',
        display: 'grid',
        gap: '0.75rem',
        gridTemplateRows: `repeat(${endLength}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${endLength}, minmax(0, 1fr))`
    }

    return (
        <div style={lengthStyle}>
            {inputData.map((data, index) => <InputXO key={index} index={index} data={data} />)}
        </div>
    )
}
