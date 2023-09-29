import React, { useContext, useEffect } from 'react'
import Board from '../components/Board'
import GameHeader from '../components/GameHeader';
import WinnerName from '../components/WinnerName';
import { GameContext } from '../context/GameContext';


function Game1v1() {
  const moonAudio = document.getElementById('moon');
  const {redWins, yellowWins, playingNow, isGameOver} = useContext(GameContext);

  useEffect(()=> {
    moonAudio.play();    
  }, [])
  
  return (
    <>
        <div className="bg-darkPurble w-screen absolute bottom-0 rounded-t-[50px] h-[15%] z-10"></div>


        <div className='z-20 flex flex-col'>
            <GameHeader />

            {/* Scores */}
            <div className="flex items-center flex-col sm:flex-row gap-12">
              <div className="flex gap-5 sm:hidden">
                <div className={"px-12 py-2  bg-pinky text-3xl font-semibold rounded-3xl border-black border-4 select-none " + (playingNow === 1 && !isGameOver?"scale-[120%]":null)}>{redWins}</div>
                <div className={"px-12 py-2 bg-yellowish text-3xl font-semibold rounded-3xl border-black border-4 select-none " + (playingNow === 2 && !isGameOver?"scale-[120%]":null)}>{yellowWins}</div>
              </div>
              <div className={"px-12 py-9 bg-pinky text-3xl font-semibold rounded-3xl border-black border-4 select-none hidden sm:block " + (playingNow === 1 && !isGameOver?"scale-[120%]":null)}>{redWins}</div>
              
              <Board />
              
              <div className={"px-12 py-9 bg-yellowish text-3xl font-semibold rounded-3xl border-black border-4 select-none hidden sm:block " + (playingNow === 2 && !isGameOver?"scale-[120%]":null)}>{yellowWins}</div>
            </div>
            
            <WinnerName />
        </div>
    </>
    
  )
}

export default Game1v1