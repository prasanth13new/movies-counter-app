import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { API } from './global';
import { EditMovieForm } from './EditMovieForm';

export function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return (
    <div>
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
      <h1>Edit Movie</h1>
      {movie ? <EditMovieForm movie={movie} /> : "Loading..."}
    </div>
  );
};
