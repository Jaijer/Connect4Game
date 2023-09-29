import React, { useContext, useState } from 'react'
import { GameContext } from '../context/GameContext';

function Board() {
    const {board, playAt, hoverInAt, hoverOutAt} = useContext(GameContext);
    
  return (
    <div className='relative'>
        
        <div className="bg-white h-[400px] w-[360px] sm:h-[600px] sm:w-[560px] pb-[50px] p-[10px] rounded-3xl border-4 border-b-[10px] border-black grid grid-cols-7 grid-rows-7">
            {board.map((col, i) => board.map((circle, j) => (
                <div key={i + j*board.length} className="flex justify-center items-center" >
                    <div className={"w-[80%] h-[80%] rounded-full border-4 border-black select-none " +
                    (board[i][j]===1? "bg-pinky pt-[4px] fall":board[i][j]===2? "bg-yellowish pt-[4px] fall":board[i][j]===3?
                    "bg-black bg-opacity-20 pt-[4px]":"bg-lightPurble border-t-8")}></div>
                </div>
            )))}
        </div>

        <div className='absolute grid grid-cols-7 grid-rows-1 h-full w-full top-0 select-none'>

            {board.map((col, i) => (
                <div key={i} onClick={()=>{
                    playAt(i);
                    hoverInAt(i);
                }} onMouseEnter={()=> hoverInAt(i)} onMouseLeave={()=>hoverOutAt(i)}></div>
            ))}
            
        </div>
    </div>
  )
}

export default Board