
import { DotBoard, BoxBoard,ScoreCard,GameOver } from ".."
import {useDispatch} from 'react-redux'
import { resetAll} from "../../features/dotSlice"
import { useLocation,Link } from "react-router-dom"


function Game() {

  const location = useLocation()
  const len = location.state
  
  const dispatch = useDispatch()

  const clickHandler = ()=>{
    dispatch(resetAll())
  }

  return (
    <div className=' bg-slate-400 h-screen w-screen [word-spacing:-3px] font-mono'>
      <DotBoard len={len} />
      <BoxBoard len={len} />
      <ScoreCard len={len} />
      <GameOver clickHandler={clickHandler}/>
      <Link to='/set' className='absolute top-5 left-5 z-50 rounded-lg bg-gray-300 px-3 text-lg' onClick={clickHandler}> Reset </Link>
    </div>
  )
}

export default Game