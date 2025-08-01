import { ArrowRightIcon, Calendar1Icon, Clock1Icon } from "lucide-react";
import React from "react";
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate()

    return (
        <>
        <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
            <img src={assets.marvelLogo} alt="" className="max-h-11 lg:h-11 mt-20"></img>
            <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold mx-w-110">Guardians <br/> of the Galaxy</h1>
            <div className="flex items-center gap-4 text-gray-300">
            <span>Action | Advanture | Sci-fi</span>
            <div className="flex items-center gap-1">
                <Calendar1Icon className='w-4.5 h-4.5'/>2025
            </div>
            <div className="flex items-center gap-1">
                <Clock1Icon className='w-4.5 h-4.5'/> 2h 20
            </div>
            </div>
            <p className='max-w-md text-gray-300'>in a post apocalyptic world where cities ride on wheels and consume each
                other to survive, two people meet in london and try to stop a conspirancy
            </p>
            <button onClick={()=>navigate('/movies')} className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
                Explore Movies
                <ArrowRightIcon className="w-5 h-5"/>
            </button>
        </div>
        </>
    )
}

export default HeroSection