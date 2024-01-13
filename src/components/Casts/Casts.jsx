import { getActorInfo } from 'Services/api';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Casts.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const movieActors = async () => {
      try {
        const response = await getActorInfo(id);
        setActors(response.cast);
        !response.cast.length ? setErrorMessage(true) : setErrorMessage(false);
      } catch (error) {
        setErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    };
    movieActors();
  }, [id]);

  const stockImg =
    'http://kultura-pmr.com.ua/wp-content/uploads/2022/05/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%BE%D0%B6%D0%B5-1024x576.jpg';

  return (
    <div>
      {isLoading && <Loader className={css.loader} />}
      {actors.length > 0 && (
        <ul className={css.castItems}>
          {actors.map(({ name, id, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : stockImg
                }
                width={250}
                alt="poster"
              />
              <h4>{name}</h4>
              <h5>Character: {character}</h5>
            </li>
          ))}
        </ul>
      )}
      {errorMessage && <div>We don`t have casts for this movie</div>}
    </div>
  );
};
export default Cast;
