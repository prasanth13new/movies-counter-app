import { useNavigate, useParams } from "react-router-dom";
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const navigate = useNavigate();
  // console.log(movie);
  // conditional styling
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div>
      <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      ></iframe>

      <div className='movie-detail-container'>
        <div className='movie-specs'>
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className='movie-rating'>⭐ {movie.rating}</p>
        </div>
        <p>{movie.summary}</p>
        <Button startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)} variant="outlined">Back</Button>
        {/* <h1>
            Here is the MovieDetails of {movie.name}
            {movie.rating}
          </h1> */}
      </div>
    </div>
  );
}
