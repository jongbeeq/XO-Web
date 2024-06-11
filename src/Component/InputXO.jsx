import usePlay from "../hooks/use-play"
import XOData from "./XOData"

export default function InputXO({ index }) {
    const { playerInput, setPlayerInput, round, setRound, sidePlayer, haveWinner } = usePlay()

    const dataOfBox = playerInput[index]
    const clickAble = haveWinner || dataOfBox

    const handleOnClick = () => {
        if (clickAble) return
        playerInput[index] = sidePlayer
        setPlayerInput([...playerInput])
        setRound(round + 1)
    }

    const clickAbleStyle = clickAble ? '' : ' ' + 'hover:bg-neutral-200'

    const isWinnerBox = haveWinner && haveWinner.find((winnerIndex) => index === winnerIndex)
    const OXStyle = ' ' + (dataOfBox === 'X' ? 'bg-red-100' : 'bg-blue-100')
    const winnerStyle = !isNaN(isWinnerBox) ? OXStyle : ''

    return (
        <button onClick={handleOnClick} className={"aspect-square relative border border-black" + clickAbleStyle + winnerStyle}>
            <XOData dataOfBox={dataOfBox} />
            <p className="absolute top-0 left-0 text-[12px]">
                {'index: ' + index}
            </p>
        </button>
    )
}
