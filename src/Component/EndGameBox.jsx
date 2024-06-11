import usePlay from "../hooks/use-play"

export default function EndGameBox() {
    const { haveWinner, playerInput, match, resetMatch } = usePlay()

    const winner = haveWinner ? (playerInput[haveWinner[0]] === 'X' ? 'Player1' : 'Player2') : ''
    const playNewMatch = () => {
        resetMatch()
    }

    return (
        <div className='absolute z-10 w-full h-full flex justify-center items-center '>
            <div className='absolute w-full h-full bg-neutral-500 opacity-65'></div>
            <div className="absolute w-[80%] py-[5%] flex flex-col gap-2 items-center bg-white">
                <h1 className=" text-lg font-semibold">Match {match}</h1>
                {
                    winner ?
                        <h1 className=" text-2xl ">&#9818; Winner is {winner}</h1>
                        :
                        <h1 className=" text-2xl ">Draw</h1>
                }
                <button onClick={playNewMatch} className="text-nowrap py-[2%] px-[5%] rounded-md text-sm text-white font-medium bg-orange-400 hover:drop-shadow-md hover:bg-orange-500 duration-100">New Match</button>
            </div>
        </div>
    )
}
