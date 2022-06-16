import { useState } from 'react';
import { INTIAL_MOVIE_LIST } from './App';

export function AddMovie() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");


  return (
    <div className='inputbox'>
      <input onChange={(event) => setName(event.target.value)} type="text" placeholder='Name' />

      <input onChange={(event) => setPoster(event.target.value)} type="text" placeholder='Poster' />

      <input onChange={(event) => setRating(event.target.value)} type="text" placeholder='Rating' />

      <input onChange={(event) => setSummary(event.target.value)} type="text" placeholder='Summary' />

      <input onChange={(event) => setTrailer(event.target.value)} type="text" placeholder='Trailer' />


      <button onClick={() => {
        const newMovie = { name, poster, rating, summary, trailer };
        setMovieList([...movieList, newMovie]);
      }}>Add Movie</button>

    </div>
  );
}
