// import React from "react";
// import { dummyShowsData } from "../assets/assets";
// import MovieCard from "../components/MovieCard";
// import BlureCircle from "../components/BlureCircle";

// const Movies = () => {
//     return dummyShowsData.length > 0 ? (
//         <div className='relative my-20 mb-40 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-44 overflow-visible min-h-[80vh]'>

//             <BlureCircle top="10%" left="0%" />
//             <BlureCircle top="5%" left="60px" />

//             <h1 className='text-lg font-medium my-4'>Now Showing</h1>
//             <div className='flex flex-wrap max-sm:justify-center gap-8'>
//                 {dummyShowsData.map((movie) => (
//                     <MovieCard movie={movie} key={movie._id} />
//                 ))}
//             </div>
//         </div>
//     ) : (
//         <div className="flex flex-col items-center justify-center h-screen">
//             <h1 className="text-3xl font-bold text-center">No Movie Available</h1>
//         </div>
//     );
// };

// export default Movies;
import React from 'react'
import MovieCard from '../components/MovieCard'
import BlureCircle from '../components/BlureCircle'
import { useAppContext } from '../context/AppContext'

const Movies = () => {

  const { shows } = useAppContext()

  return shows.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlureCircle top="150px" left="0px"/>
      <BlureCircle bottom="50px" right="50px"/>

      <h1 className='text-lg font-medium my-4'>Now Showing</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {shows.map((movie)=> (
          <MovieCard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No movies available</h1>
    </div>
  )
}

export default Movies
