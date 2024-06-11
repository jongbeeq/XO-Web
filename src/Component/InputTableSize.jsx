import usePlay from "../hooks/use-play"

export default function InputTableSize() {
    const { endLength, setEndLength } = usePlay()

    const handleOnChange = (e) => {
        let length = e.target.value
        if (e.target.value > 10) length = 10
        if (e.target.value < 3) length = 3
        setEndLength(length)
    }
    return (
        <div className="flex flex-col justify-between items-center gap-1">
            <h1 className="font-medium">Table Size</h1>
            <div className="flex flex-col items-center w-full">
                <input onKeyUp={(e) => e.preventDefault()} value={endLength} type="number" min={1} max={10} onChange={handleOnChange} className="w-[80%] outline-none border border-black"></input>
                <h1 className="text-[10px] leading-[0.7rem]">rows &#215; columns</h1>
            </div>
        </div>

    )
}
