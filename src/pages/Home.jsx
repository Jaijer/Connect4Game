import React from 'react'
import orange from "../assets/connect4img.png"
import { useNavigate } from 'react-router'

function Home() {
    const navigate = useNavigate();


  return (
    <div className="bg-darkPurble p-8 rounded-3xl border-4 border-black border-b-[10px] w-full sm:w-[600px] mx-3 flex flex-col gap-5 justify-center items-center">
            <div className="pt-6 pb-12 select-none">
                <img className='border-4 rounded-full border-black w-16 h-16' src={orange} alt="" />
            </div>

            <div className="bg-pinky p-4 rounded-3xl border-4 border-black border-b-[10px]
             w-full mx-3 flex flex-col justify-center items-center group cursor-pointer"
             onClick={()=>{
                navigate('/1v1')
            }}>
                <h3 className="text-lg sm:text-xl text-white font-bold group-hover:scale-110 transition-all duration-300 select-none">PLAY VS PLAYER</h3>
             </div>

             <div className="bg-yellowish p-4 rounded-3xl border-4 border-black border-b-[10px]
             w-full mx-3 flex flex-col justify-center items-center group cursor-pointer">
                <h3 className="text-lg sm:text-xl text-black font-bold group-hover:scale-110 transition-all duration-300 select-none">PLAY VS BOT</h3>
             </div>

    </div>
  )
}

export default Home