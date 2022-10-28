import "./styles.css";
import movies from "./components/movies";

export default function App() {
  return (
    <div className="container">
      <h1>Movie Navigator</h1>
      <section id="movies">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </section>
    </div>
  );
}
