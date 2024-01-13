import { getPopularMovies } from 'Services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import css from '../components/App.module.css';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState([false]);
  const [isLoading, setIsLoading] = useState([false]);

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    try {
      const responseData = await getPopularMovies();
      setPopularMovies(responseData.results);
      !responseData.results ? setErrorMessage(true) : setErrorMessage(false);
    } catch (error) {
      setErrorMessage(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1 className={css.firstTitle}>Trending today</h1>
      {isLoading && <Loader className={css.loader} />}
      {popularMovies.length > 0 && <MoviesList array={popularMovies} />}
      {errorMessage && <h3>Wait a second, please...</h3>}
    </div>
  );
};
export default HomePage;
