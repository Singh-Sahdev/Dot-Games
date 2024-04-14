
import { DotBoard, BoxBoard,ScoreCard } from ".."
import {useDispatch,useSelector} from 'react-redux'
import { updateBoxVals,resetAll } from "../../features/dotSlice"

function Game() {
  const dispatch = useDispatch()

  const len = useSelector(state => state.len)

  let boxVal=[]
    for(let i=0;i<len+1;i++){
      let temp = []
      for(let j=0;j<len+1;j++){
        temp.push({
          sides:{
            l:false,
            b:false,
            r:false,
            t:false,
          },
          totalSides:0,
          player:-1
        })
      }
      boxVal.push(temp)
    }
    
    dispatch(updateBoxVals(boxVal))


  return (
    <div className=' bg-slate-400 h-screen w-screen'>
      <BoxBoard/>
      <DotBoard/>
      <ScoreCard/>
      <button className='absolute top-5 left-5 rounded-lg bg-gray-300 px-3 text-lg' onClick={()=>dispatch(resetAll())}> Reset </button>
    </div>
  )
}

export default Game