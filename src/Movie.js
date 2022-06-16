import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Movie({ movie, id }) {
  // conditional styling
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  // useState using boolean
  const [show, setShow] = useState(true);

  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <div className='movie-specs'>
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
      </div>
      <button onClick={() => navigate("/movies/" + id)}>Info</button>
      <button onClick={() => setShow(!show)}>Toogle summary</button>
      {/* <p style={summaryStyles} className='movie-summary'>{movie.summary}</p> */}

      {/* Conditional rendering */}
      {show ? <p style={summaryStyles} className='movie-summary'>{movie.summary}</p> : ""}
      <Counter />
    </div>
  );
}
