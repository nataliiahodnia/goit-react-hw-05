import css from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState, useMemo } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieSearch } from "../../api-movies";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsSearach = searchParams.get("query") ?? "";

  const handleSearch = useMemo(() => {
    return (newQuery) => {
      searchParams.set("query", newQuery);
      setSearchParams(searchParams);
      setMovies([]);
    };
  }, [searchParams, setSearchParams, setMovies]);

  useEffect(() => {
    if (paramsSearach === "") {
      return;
    }
    async function getMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchMovieSearch(paramsSearach);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [paramsSearach]);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
