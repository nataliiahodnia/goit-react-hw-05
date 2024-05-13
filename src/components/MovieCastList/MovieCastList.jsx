import css from "./MovieCastList.module.css";
import MovieCastCard from "../MovieCastCard/MovieCastCard";

export default function MovieCastList({ movieCast }) {
  return (
    <ul className={css.list}>
      {movieCast.map((movie) => (
        <li key={movie.cast_id}>
          <MovieCastCard data={movie} />
        </li>
      ))}
    </ul>
  );
}
