import css from '../components/App.module.css';
import { searchMovie } from 'Services/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  useEffect(() => {
    const getMovie = async () => {
      if (searchQuery) {
        setIsLoading(true);
        try {
          const response = await searchMovie(searchQuery);
          setMovie(response.results.length > 0 ? response.results : []);
          !response.results.length
            ? setErrorMessage(true)
            : setErrorMessage(false);
        } catch (error) {
          setErrorMessage(true);
        } finally {
          setIsLoading(false);
        }
      }
    };
    getMovie();
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    const cleanQuery = query.trim();
    if (!cleanQuery) {
      alert('Please enter some movie');
      setMovie([]);
      setSearchParams('');
      setErrorMessage(false);
      return;
    }
    setSearchParams({ query: cleanQuery });
    setQuery('');
  };

  const onChange = event => setQuery(event.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.searchForm}>
          <input
            onChange={onChange}
            type="text"
            placeholder="Write the name of the movie"
            value={query}
            className={css.inputForm}
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </div>
      </form>
      {isLoading && <Loader className={css.loader} />}
      {movie.length > 0 && <MoviesList array={movie} query={searchQuery} />}
      {errorMessage && <h3>Wait a second, please...</h3>}
    </div>
  );
};

export default MoviesPage;
