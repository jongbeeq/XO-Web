import EndGameBox from './Component/EndGameBox'
import InputTableSize from './Component/InputTableSize'
import RoundDetail from './Component/RoundDetail'
import XOTable from './Component/XOTable'
import usePlay from './hooks/use-play'

function App() {
  const { haveWinner } = usePlay()

  return (
    <div className='w-fit m-auto relative flex flex-col items-center gap-3'>
      <InputTableSize />
      <XOTable />
      <RoundDetail />
      {haveWinner && <EndGameBox />}
    </div>
  )
}

export default App
