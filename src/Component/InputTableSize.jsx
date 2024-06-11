import usePlay from "../hooks/use-play"

export default function InputTableSize() {
    const { setEndLength } = usePlay()

    const handleOnChange = (e) => {
        setEndLength(e.target.value)
    }
    return (
        <div>
            <div>InputTableSize</div>
            <input onChange={handleOnChange} className="border border-black"></input>
        </div>

    )
}
