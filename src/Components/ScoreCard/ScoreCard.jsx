import { useSelector, useDispatch } from 'react-redux'
import {updateOver} from '../../features/dotSlice'

function ScoreCard({
  len
}) {

  // Using the redux store global variables
    const scoreCard = useSelector(state => state.scoreCard)
    const playerColor = useSelector(state => state.playerColor)
    const turn = useSelector(state => state.turn)
    
  
    const dispatch = useDispatch()

    let style 

    if(turn==1){
      style={borderColor:playerColor[0]}
    }
    else if(turn==2){
      style={borderColor:playerColor[1]}
    }

    /* the game is over or not, here 
      -1: Game is ON
       0: Game Draws
       1: Won by player 1
       2: Won by player 2
  */
    setTimeout(()=>{
      if((scoreCard[0]+scoreCard[1]) == Math.pow(len-1,2)){
        if(scoreCard[0]>scoreCard[1]){
          dispatch(updateOver(1))
        }
        else if(scoreCard[0]==scoreCard[1]){
          dispatch(updateOver(0))
        }
        else{
          dispatch(updateOver(2))
        }
      }
    },0) // This is only done to avoid that react warning of updating a component while rendering other components

    
  return (
    <div className={`absolute flex justify-between items-center top-1/2 -translate-y-1/2 w-screen z-0 `}>
        <div style={turn==1?style:{}} className={`border-[3px] border-gray-300 flex flex-col justify-around items-center p-8 ml-10 rounded-3xl bg-gray-300 `}>
            <h1 className=' text-xl'>Player 1 Score</h1>
            <h1 className='  text-3xl font-bold pt-6'>{scoreCard[0]}</h1>
        </div>
        <div style={turn==2?style:{}} className={`border-[3px] border-gray-300 flex flex-col justify-around items-center p-8 mr-10 rounded-3xl bg-gray-300 `}>
            <h1 className=' text-xl'>Player 2 Score</h1>
            <h1 className=' text-3xl font-bold pt-6'>{scoreCard[1]}</h1>
        </div>
    </div>
  )
}

export default ScoreCard