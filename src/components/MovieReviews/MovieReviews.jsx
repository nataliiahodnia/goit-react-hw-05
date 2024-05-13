import { fetchMovieReviews } from "../../api-movies";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useState, useEffect } from "react";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

export default function MovieReviews() {
  const { moviesId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const massegeLoadText = "We don`t have any reviews for this movie.";

  useEffect(() => {
    async function fetchReviewsId() {
      if (!moviesId) {
        return;
      }
      try {
        setIsLoading(true);
        const data = await fetchMovieReviews(moviesId);
        setMovieReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviewsId();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div>
      {movieReviews.length > 0 ? (
        <MovieReviewsList movieReviews={movieReviews} />
      ) : (
        <p>{massegeLoadText}</p>
      )}
    </div>
  );
}
