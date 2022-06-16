import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  // const movieList = INTIAL_MOVIE_LIST;
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = { name, poster, rating, summary, trailer };
    setMovieList([...movieList, newMovie]);
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

      <div className='movie-list'>
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}
      </div>
    </div>
  );
}