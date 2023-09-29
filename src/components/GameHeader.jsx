import React, { useContext } from 'react'

import orange from "../assets/connect4img.png";
import { GameContext } from '../context/GameContext';
import { useNavigate } from 'react-router';

function GameHeader() {
    const {restart, quit} = useContext(GameContext);

    const moonAudio = document.getElementById('moon');
    const navigate = useNavigate();


  return (
    <div className="flex justify-between items-center mb-5 select-none">
        <button className='bg-darkPurble text-white font-bold w-24 py-2 rounded-full transition-all hover:scale-110'
        onClick={()=> {
            quit();
            moonAudio.pause();
            navigate('/');
        }}>Quit</button>

        <img className='border-4 rounded-full border-black w-8 h-8' src={orange} alt="" />

        <button className='bg-darkPurble text-white font-bold w-24 py-2 rounded-full transition-all hover:scale-110'
        onClick={()=>restart()}>Restart</button>
    </div>
  )
}

export default GameHeader