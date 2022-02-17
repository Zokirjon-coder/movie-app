import React from "react";
import { Container, Header } from "./styled";
import { motion } from "framer-motion";

const Movie = ({ movie }) => {
  const {
    id,
    backdrop_path,
    original_title,
    original_language,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;
  return (
    <Container
      as={motion.div}
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Header>
        <h5>{original_title}</h5>
      </Header>
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w500" + poster_path}
          alt={original_title}
        />
      </div>
    </Container>
  );
};

export default Movie;
