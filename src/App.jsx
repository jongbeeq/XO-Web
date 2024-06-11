import GamePlayPage from './Component/GamePlayPage'
import StartGameBox from './Component/StartGameBox'
import usePlay from './hooks/use-play'

function App() {
  const { startGame } = usePlay()

  return (
    <div className='w-[500px] h-[100vh] m-auto relative flex flex-col justify-center items-center gap-3'>
      {
        startGame ?
          <GamePlayPage />
          :
          <StartGameBox />
      }
    </div>
  )
}

export default App
