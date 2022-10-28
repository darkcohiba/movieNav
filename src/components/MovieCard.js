export default function MovieCard(props) {
    const movie = props.movie;
    return (
      <figure className="card">
        <img src={movie.posterUrl} alt={movie.name + " movie poster"} />
        <figcaption>
          {movie.name} ({movie.releaseYear})
        </figcaption>
      </figure>
    );
  }
  