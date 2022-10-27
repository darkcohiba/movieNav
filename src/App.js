import "./styles.css";
import movies from "./components/movies";

export default function App() {
  console.log(movies)
  return (
    <div className="container">
      <h1>Movie Navigator</h1>
      <section id="movies" className="grid"></section>
    </div>
  );
}
