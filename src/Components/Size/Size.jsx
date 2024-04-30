import {useDispatch} from 'react-redux'
import {updateBoxVals,updateError,updatePlayerColor} from '../../features/dotSlice'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Size() {

    const dispatch = useDispatch()
    
    const [len,setLen] = useState(5)
    const [player1Color, setPlayer1Color] = useState('blue')
    const [player2Color, setPlayer2Color] = useState('red')

    const colorOptions = [
      'blue',
      'red',
      'green',
      'yellow',
      'pink',
      'orange'
    ]

    const clickHandler = () =>{
      if(player1Color==player2Color){
        dispatch(updateError(`Can't make both player with same color` ));
        return
      }
        let boxVal=[]
        for(let i=0;i<len-(-2+1);i++){
            let temp = []
            for(let j=0;j<len-(-2+1);j++){
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
        dispatch(updatePlayerColor([player1Color,player2Color]))
    }
    

  return (
    <div className=' absolute py-8 px-10 rounded-3xl [word-spacing:-2px] font-mono bg-gray-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 '>
        
            <div className='flex justify-between items-center'>
            <label className=' text-lg font-medium'>Please Select the Playing Board len from the given range:</label>
            <p className=' text-2xl text-center font-medium  bg-slate-400 w-10 py-1 rounded-xl text-white'>{len}</p>
            </div>
            <br/><br/>    
            <input className='w-full' type="range" name="len" id="len" min={3} max={10} value={len} onChange={(e)=> setLen(e.target.value)}/>
            <br /><br />
            <div className='  mb-5 w-full flex justify-between'>
              <label className='text-lg' htmlFor="p1">Player 1 Color</label>
              <select name="" id="1" value={player1Color} onChange={(e) => {dispatch(updateError(''));setPlayer1Color(e.target.value);}}>
                {
                  colorOptions.map((opt)=>(
                    <option key={opt} value={opt}>{opt}</option>
                  ))
                }
              </select>

              <label className='text-lg pl-3'>Player 2 Color</label>
              <select name="" id="2" value={player2Color} onChange={(e) => {dispatch(updateError(''));setPlayer2Color(e.target.value);}}>
                {
                  colorOptions.map((opt)=>(
                    <option key={opt} value={opt}>{opt}</option>
                  ))
                }
              </select>
            </div>
            <div className='w-full text-center'>
              <Link to={player1Color==player2Color?'#':'/game'} state={len} onClick={clickHandler}  className={`  rounded-lg bg-slate-400 px-3 py-1 text-xl text-white`}>Play</Link>
            </div>
            
        
    </div>
  )
}

export default Size