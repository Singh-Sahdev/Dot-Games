/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Dot} from '../index'
import { useSelector } from 'react-redux';

function DotBoard() {
  
  const error = useSelector(state => state.error)
  let [first,setFirst] = useState(null)

  const turn = useSelector( state => state.turn)
  const len = useSelector(state => state.len)

  let totalBoxes = Math.pow(len+1,2)
  let totalDots = Math.pow(len,2)
  let cols = ''
  for (let i = 0; i < len; i++) {
    cols+='auto '
  }

  return (
    <>
      <h1 className=' text-2xl font-medium absolute top-4 left-1/2 -translate-x-1/2 text-center'> Player{turn} turn</h1>
      <div 
      style={{gridTemplateColumns:`${cols} `}} 
      className={` z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid`}>
  
        {
          [...Array(totalDots)]
          .map((box,i)=>(
              <Dot first={first} setFirst={setFirst} key={i} row={Math.floor(i/(len))+1} col = {i%(len)+1} margin={17.3}/>
          ))
        }
  
      </div>
      <h1 className=' text-xl font-medium absolute bottom-3 left-1/2 -translate-x-1/2 text-center'>{error}</h1>

    </>
  )
}

export default DotBoard