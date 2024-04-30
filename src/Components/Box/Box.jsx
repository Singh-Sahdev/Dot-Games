/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"

function Box({
    row,
    col,
    style={},
    value
}) {

  const playerColor = useSelector(state => state.playerColor)
  
  if(value){
    style = {...style,backgroundColor:playerColor[Number(value-1)]}
  }
  
  return (
    <div style={style} className={` border-stone-500 flex justify-center -m-[2px] items-center w-[3.4rem] h-[3.4rem] text-xl`}>  </div>
  )
}

export default Box