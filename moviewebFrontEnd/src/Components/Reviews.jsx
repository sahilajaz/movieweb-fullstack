import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../Components/ReviewForm';

const Reviews = ({ getMovieData, movie }) => {
  const [body, setBody] = useState([]);
  const revText = useRef();
  const { movieId, id } = useParams();

  const fetchReviews = (id) => {
    fetch(`http://localhost:8080/api/v1/review/${id}`)
      .then(res => res.json())
      .then(data => setBody(data));
  };

  useEffect(() => {
    if (movieId && id) {
      getMovieData(movieId);
      fetchReviews(id);
    }
  }, []) 

  const addReview = (e) => {
    e.preventDefault();
    const rev = revText.current.value;

    fetch(`http://localhost:8080/api/v1/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: rev,
        imbd: movieId
      })
    })
    .then(() => {
      revText.current.value = "";
      fetchReviews(id); 
    })

  };

  const handleDelete = () => {
     fetch(`http://localhost:8080/api/v1/review/${id}` , {
        method: 'DELETE'
     })
     .then(response => {
      if(response.ok) {
        setBody([])
      }
      else {
        console.error('Failed to delete the review. Status:', response.status)
      }
     })
  }

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 bg-black p-5'>
      <div className='py-6 px-9'>
        <h3 className='text-white mb-3'>Reviews</h3>
        <img src={movie?.poster} alt="Movie Poster" />
      </div>
      <div className="review py-5">
        <ReviewForm 
          handleSubmit={addReview} 
          revText={revText} 
          labelText="Write a review"
        />
        {body.map((r) => (
          <div key={r.id} className='text-white py-3 ms-12 '>
            <hr className='mb-2  bg-slate-400 h-[0.1px]'/>
             <div className="review ms-1 text-1xl text-bold">
             {r.body}
             </div>
          </div>
        ))}
        {
          body.length > 0 && (
            <button className='text-blue-400 border border-blue-400 px-4 py-1 rounded-lg font-bold mt-10 mb-3 hover:text-white hover:bg-blue-500 ms-10'
            onClick={handleDelete}
            >Delete ALL</button>
          )
        }
      </div>
    </div>
  );
};

export default Reviews;
