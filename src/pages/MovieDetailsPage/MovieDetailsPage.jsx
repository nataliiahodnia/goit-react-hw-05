import css from "./MovieDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMoviesDetails } from "../../api-movies";
import { Link, Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetailsCard from "../../components/MovieDetailsCard/MovieDetailsCard";
import { Suspense } from "react";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDetailsId() {
      if (!moviesId) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchMoviesDetails(moviesId);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetailsId();
  }, [moviesId]);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movieDetails && <MovieDetailsCard movieDetails={movieDetails} />}

      <p className={css.text}>Additional information</p>

      <ul className={css.list}>
        <li className={css.item}>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
        </li>
        <li className={css.item}>
          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
