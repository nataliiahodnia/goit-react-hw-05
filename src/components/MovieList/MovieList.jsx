import css from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id} className={css.item}>
          <Link to={`/movies/${item.id}`} state={location} className={css.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
