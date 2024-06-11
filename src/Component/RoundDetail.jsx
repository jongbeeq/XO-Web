import usePlay from "../hooks/use-play"

export default function RoundDetail() {
    const { round, sidePlayer } = usePlay()
    const OXStyle = ' ' + (sidePlayer === 'X' ? 'text-red-500' : 'text-blue-500')
    return (
        <div className="w-full flex justify-between ">
            <div>
                <h1><b>Round:</b> {round}</h1>
                <h1><b>Side:</b> <b className={OXStyle}>{sidePlayer}</b></h1>
            </div>
            <div className="flex gap-2 text-xs">
                <p><b className="text-red-500">X:</b> Player1</p>
                <p><b className="text-blue-500">O:</b> Player2</p>
            </div>
        </div>
    )
}
