import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { API } from './global';
import { useNavigate } from 'react-router-dom';

// export function AddMovie({ movieList, setMovieList }) {

export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = { name, poster, rating, summary, trailer };
    // setMovieList([...movieList, newMovie]);
    // POST method - fetch
    // 1. method - POST
    // 2. data (newMovie) - body & JSON
    // 3. headers - JSON
    // After movie craetion --> /movies
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return (
    <div>
      <div className='add-movie-form'>
        <TextField onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />
        <TextField onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />
        <TextField onChange={(event) => setRating(event.target.value)} label="Rating" variant="outlined" />
        <TextField onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />
        <TextField onChange={(event) => setTrailer(event.target.value)} label="Trailer" variant="outlined" />

        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
    </div>
  );
};
