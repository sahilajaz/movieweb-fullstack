import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Layout = ({ movies }) => {
  const navigate = useNavigate();

  const reviews = (movieId , id) => {
    navigate(`/Reviews/${movieId}/${id}`);
  };

  

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className='mt-[0.2px] bg-black h-[100%] w-[100%]'>
      <Carousel>
        {movies.map((movie, index) => (
          <Paper key={index}>
            <div className='h-[100%]'>
              <div
                className="w-screen bg-no-repeat bg-cover bg-top relative h-[100%]"
                style={{
                  backgroundImage: `url(${movie.poster})`,
                  height: "700px"
                }}
              >
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black'></div>
                <div className="movie-card relative lg:top-52 sm:left-24 top-44 left-8 h-full">
                  <div className='flex flex-col md:flex-row justify-start md:gap-11 xl:gap-44'>
                    <div className="movie-poster">
                      <img src={movie.poster} alt="movie-poster" className='sm:h-96 sm:w-80 w-32 border rounded-md' />
                    </div>
                    <div className="title text-white text-bold mt-12">
                      <h4 className='md:text-2xl font-bold text-gray-300 cursor-pointer hover:text-blue-600'>{movie.title}</h4>
                    </div>
                    <div className="play-btn relative">
                     <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                     <FontAwesomeIcon className="text-yellow-500 text-2xl md:text-6xl mt-10 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125" icon={faCirclePlay}/>
                     </Link>
                    </div>
                    <button
                      className='text-white bg-blue-600 mt-11 px-3 py-1 h-10  rounded hover:bg-slate-800 text-sm md:text-base font-bold'
                      onClick={() => reviews(movie.imdbId , movie.id)}
                    >
                      Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Layout;
