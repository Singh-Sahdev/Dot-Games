import React from 'react'
import { useSelector } from 'react-redux'
import {RiCloseFill} from '@remixicon/react'
import { Link } from 'react-router-dom'

function GameOver({
    clickHandler
}) {

    const over = useSelector(state => state.over)

    const closeHandeler = (e) =>{
        e.target.parentNode.style.display = 'none'
    }

    let overMessage = ``
    if(over==0){
        overMessage = `Game Draws`
    }
    else if(over==1){
        overMessage = `Player 1 has Won The Game`
    }
    else{
        overMessage = `Player 2 has Won The Game`
    }

  return (

    <div className={` ${over==-1?'hidden':''} absolute  py-8 px-10 rounded-3xl bg-gray-300 top-1/2 left-1/2 -translate-x-1/2 z-50 -translate-y-1/2 `}>
        <button className=' bg-slate-500 rounded-full absolute right-3 p-1 top-3' onClick={closeHandeler}><RiCloseFill className=' pointer-events-none'></RiCloseFill></button>
        <h1 className='pt-2 font-medium text-xl'>{overMessage}</h1>
        <div className='flex justify-evenly items-center pt-4'>
            <Link to='/set' className=' rounded-lg bg-slate-500 px-3 text-lg text-white' onClick={clickHandler}> Reset </Link>
            <Link to='/'  className=' rounded-lg bg-slate-500 px-3 text-lg text-white' onClick={clickHandler} > Home </Link>
        </div>
    </div>

  )
  
}

export default GameOver