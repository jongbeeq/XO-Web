import usePlay from "../hooks/use-play"
import EndGameBox from "./EndGameBox"
import RoundDetail from "./RoundDetail"
import XOTable from "./XOTable"

export default function GamePlayPage() {
    const { matchIsEnd, match } = usePlay()
    return (
        <>
            <h1 className='text-3xl font-medium'>Match {match}</h1>
            <XOTable />
            <RoundDetail />
            {matchIsEnd && <EndGameBox />}
        </>
    )
}
