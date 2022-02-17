import axios from "axios";
import { useEffect, useState } from "react";
import Ganre from "./Components/Ganre";
import Movie from "./Components/Movie";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    if (genre === 0) {
      setFiltered(popular);
      return;
    }
    setFiltered(popular.filter((movie) => movie.genre_ids.includes(genre)));
  }, [genre]);

  const fetchingMovies = async () => {
    const data = await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dd6a25aa4d579aea18b985002fb443b6&language=en-US&page=1"
      )
      .then((movies) => movies.data)
      .then((data) => data.results)
      .then((movies) => {
        setPopular(movies);
        setFiltered(movies);
      });
  };

  useEffect(() => {
    fetchingMovies();
  }, []);
  console.log(popular);

  return (
    <div className="App">
      <h2>popular movies</h2>

      <Ganre
        genreId={[genre, setGenre]}
        filter={setFiltered}
        popular={popular}
      />
      <motion.div layout className="Movies">
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
