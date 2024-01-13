import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from '../Loader/Loader.module.css';
import { getMovieReviews } from 'Services/api';

const Review = () => {
  const [review, setReview] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const reviewMovie = async () => {
      try {
        const response = await getMovieReviews(id);
        setReview(response.results);
        !response.results.length
          ? setErrorMessage(true)
          : setErrorMessage(false);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    };
    reviewMovie();
  }, [id]);

  return (
    <div>
      {isLoading && <Loader className={css.loader} />}
      {review.length > 0 && (
        <ul>
          {review.map(({ author, id, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <p>We don`t have review's for this movie</p>}
    </div>
  );
};

export default Review;
