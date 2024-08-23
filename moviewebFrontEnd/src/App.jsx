import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import { Routes, Route } from 'react-router-dom';
import Trailer from "./Components/Trailer";
import Reviews from "./Components/Reviews";

function App() {
  const [movies, setMovies] = useState([]);
  const [singleMovie, setSingleMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getMovies = () => {
    fetch("http://localhost:8080/api/v1/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  };

  const getMovieData = (movieId) => {
    fetch(`http://localhost:8080/api/v1/movies/imbd/${movieId}`)
      .then(res => res.json())
      .then(data => {setSingleMovie(data)})
  };



  useEffect(() => {
    getMovies();
  }, []);
   
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout movies={movies} />} />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="/Reviews/:movieId/:id" element={
      <Reviews 
      getMovieData={getMovieData} 
      movie={singleMovie} 
      reviews={reviews} 
      setReviews={setReviews} 
       />
       } />

      </Routes>
    </main>
  );
}

export default App;
