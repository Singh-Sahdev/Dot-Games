/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import {Dot} from '../index'
import { useSelector } from 'react-redux';

function DotBoard({
  len
}) {
  
  let [first,setFirst] = useState(null)

  const turn = useSelector( state => state.turn)
  const over = useSelector(state => state.over)

  let totalDots = Math.pow(len,2)
  let cols = ''
  for (let i = 0; i < len; i++) {
    cols+='auto '
  }


  return (
    <>
      <div 
      style={{gridTemplateColumns:`${cols} `}} 
      className={` z-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid`}>
  
        {
          [...Array(totalDots)]
          .map((box,i)=>(
              <Dot first={first} setFirst={setFirst} key={i} row={Math.floor(i/(len))+1} col = {i%(len)+1} pointerEvents={over!=-1?'none':'auto'}/>
          ))
        }
  
      </div>

    </>
  )
}

export default DotBoard