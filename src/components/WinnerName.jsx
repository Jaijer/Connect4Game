import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext';

function WinnerName() {
    const {isGameOver, winner} = useContext(GameContext);

  return (
    <div className="flex justify-center absolute bottom-10 right-[50%] left-[50%]">
        {isGameOver && <div className={'text-2xl py-3 px-6 rounded-full border-black border-4 font-bold ' + (winner === 0? 'bg-[#f4900c]': winner === 1? 'bg-pinky text-white': 'bg-yellowish')}>
        {winner === 0? <h3 className='w-48  flex justify-center items-center'>Tie!</h3>:
        winner === 1? <h3 className='w-48 flex justify-center items-center'>Red Won!</h3>:  <h3 className='w-48 flex justify-center items-center'>Yellow Won!</h3>}</div>}
    </div>
  )
}

export default WinnerName