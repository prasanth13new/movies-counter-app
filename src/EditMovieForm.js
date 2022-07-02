import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { API } from './global';


export function EditMovieForm({ movie }) {
  const { id } = useParams();
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  const editMovie = () => {
    const updatedMovie = { name, poster, rating, summary, trailer };
    // setMovieList([...movieList, updatedMovie]);
    // POST method - fetch
    // 1. method - POST
    // 2. data (updatedMovie) - body & JSON
    // 3. headers - JSON
    // After movie craetion --> /movies
    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };


  return (
    <div>
      <div className='add-movie-form'>
        <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" value={name} />
        <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" value={poster} />
        <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" value={rating} />
        <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" value={summary} />
        <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" value={trailer} />

        <Button color="success" onClick={editMovie} variant="outlined">Save</Button>
      </div>
    </div>
  );
};
