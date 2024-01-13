import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import css from './App.module.css';
// import Cast from './Casts/Casts';
// import Review from './Review/Review';

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('../Pages/HomePage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Casts/Casts'));
const Review = lazy(() => import('./Review/Review'));

export const App = () => {
  return (
    <div className={css.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movie" element={<MoviesPage />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="review" element={<Review />} />v
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
