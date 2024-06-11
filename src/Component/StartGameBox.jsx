import usePlay from "../hooks/use-play"
import InputTableSize from "./InputTableSize"

export default function StartGameBox() {
    const { setStartGame, match } = usePlay()

    const clickStartGame = () => {
        setStartGame(true)
    }

    return (
        <div className='absolute z-10 w-full h-full flex justify-center items-center '>
            <div className='absolute w-full h-full bg-neutral-500 opacity-65'></div>
            <div className="absolute w-[80%] py-[5%] flex flex-col gap-2 items-center bg-white">
                <h1 className="text-3xl font-medium">Match {match}</h1>
                <InputTableSize />
                <button onClick={clickStartGame} className="text-nowrap py-[2%] px-[5%] rounded-md text-sm text-white font-medium bg-orange-400 hover:drop-shadow-md hover:bg-orange-500 duration-100">Player VS Player</button>
                <button onClick={() => { }} className="text-nowrap py-[2%] px-[5%] rounded-md text-sm text-white font-medium bg-orange-400 hover:drop-shadow-md hover:bg-orange-500 duration-100">Player VS CPU</button>
            </div>
        </div>
    )
}
