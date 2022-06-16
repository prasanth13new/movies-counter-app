import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <h2 className="movie-name">{movie.name}

          {/* <button onClick={() => navigate("/movies/" + id)}>Info</button> */}
          <IconButton onClick={() => navigate("/movies/" + id)} color="primary" aria-label="delete">
            <InfoIcon />
          </IconButton>

          {/* <button onClick={() => setShow(!show)}>Toogle summary</button> */}
          <IconButton onClick={() => setShow(!show)} color="primary" aria-label="delete">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h2>

        <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
      </div>

      {/* <p style={summaryStyles} className='movie-summary'>{movie.summary}</p> */}

      {/* Conditional rendering */}
      {show ? <p style={summaryStyles} className='movie-summary'>{movie.summary}</p> : ""}
      <Counter />
    </div>
  );
}
