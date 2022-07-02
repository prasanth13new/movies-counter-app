import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

export function Movie({ movie, id, deleteButton, editButton }) {
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
    <Card className='movie-container'>
      <img className='movie-poster' src={movie.poster} alt={movie.name} />
      <CardContent>
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
      </CardContent>

      <CardActions>
        <Counter />
          <IconButton style={{"margin-left": "auto"}} aria-label="delete" color='error'>
            {deleteButton}
          </IconButton>
          <IconButton aria-label="delete" color='secondary'>
            {editButton}
          </IconButton>
      </CardActions>
    </Card >
  );
}
