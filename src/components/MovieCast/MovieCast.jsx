import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api-movies";
import { useState, useEffect } from "react";
import MovieCastList from "../MovieCastList/MovieCastList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastId() {
      if (!moviesId) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchMovieCast(moviesId);
        setMovieCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastId();
  }, [moviesId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movieCast && <MovieCastList movieCast={movieCast} />}
    </div>
  );
}
