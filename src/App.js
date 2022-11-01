import "./styles.css";
import movies from "./components/movies";
import MovieCard from "./components/MovieCard";

export default function App() {

  const c = console.log.bind();
  c(new Date().getDay())

  return (
    <div className="container">
      <h1>Movie Navigator</h1>
      <section id="movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.name} />
        ))}
      </section>
    </div>
  );
}


