import { useEffect, useState } from 'react';
import { Movie } from "./Movie";
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;

  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, { method: "GET" })
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  };

  useEffect(() => getMovies(), []);

  // Delete --> refresh movie list
  const deleteMovie = id => {
    console.log("Deleting movie: ", id);
    fetch(`${API}/movies/${id}`, { method: "DELETE" }).then(() => getMovies());
  };

const navigate = useNavigate();

  return (
    <div className='movie-list'>
      {movieList.map((mv) => (
        <Movie
          key={mv.id}
          movie={mv}
          id={mv.id}
          deleteButton={<DeleteIcon onClick={() => deleteMovie(mv.id)} />}
          editButton={<EditIcon onClick={() => navigate (`/movies/edit/${mv.id}`)} />}
        />
      ))}
    </div>
  );
}

