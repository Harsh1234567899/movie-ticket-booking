import React from "react";
import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlureCircle from "../components/BlureCircle";

const Favorite = () => {
    return dummyShowsData.length > 0 ? (
        <div className='relative my-20 mb-40 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-44 overflow-visible min-h-[80vh]'>

            <BlureCircle top="10%" left="0%" />
            <BlureCircle top="5%" left="60px" />

            <h1 className='text-lg font-medium my-4'>Fvorite List</h1>
            <div className='flex flex-wrap max-sm:justify-center gap-8'>
                {dummyShowsData.map((movie) => (
                    <MovieCard movie={movie} key={movie._id} />
                ))}
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-center">No Movie Available</h1>
        </div>
    );
};

export default Favorite;
