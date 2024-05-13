import css from "./MovieReviewsList.module.css";
import MovieReviewsCard from "../MovieReviewsCard/MovieReviewsCard";

export default function MovieReviewsList({ movieReviews }) {
  return (
    <div>
      <ul className={css.list}>
        {movieReviews.map((movie) => (
          <li key={movie.id}>
            <MovieReviewsCard data={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
