import { getMovieInfo } from 'Services/api';
import { Loader } from 'components/Loader/Loader';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from '../components/App.module.css';
import { Suspense, useEffect, useState } from 'react';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieInfo(id);
        setMovieDetails(response);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieInfo();
  }, [id]);
  const stockImg =
    'http://kultura-pmr.com.ua/wp-content/uploads/2022/05/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B6%D0%B5-1024x576.jpg';

  return (
    <div>
      <Link className={css.goBack} to={location.state?.from || '/'}>
        Go Back
      </Link>
      {isLoading && <Loader className={css.loader} />}
      {errorMessage && <h3>Something went wrong ....</h3>}

      {movieDetails && (
        <div>
          <div className={css.movieInfo}>
            <img
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : stockImg
              }
              alt={movieDetails.name || movieDetails.title}
              width={400}
              height={600}
              className={css.movieImg}
            />
            <div>
              <h2>{movieDetails.title || movieDetails.name}</h2>
              <p>User Score: {(movieDetails.vote_average * 10).toFixed(0)} %</p>
              <h3>Overview</h3>
              {movieDetails.overview ? (
                <p>{movieDetails.overview}</p>
              ) : (
                <p>No information</p>
              )}
              <h3>Genres</h3>
              {movieDetails.genres.length ? (
                <ul>
                  {movieDetails.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              ) : (
                <p>No information</p>
              )}
            </div>
          </div>
          <div>
            <h4>Addittional information</h4>
            <ul>
              <li>
                <Link to="cast" state={{ from: location.state?.from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="review" state={{ from: location.state?.from }}>
                  Review
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading ...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
