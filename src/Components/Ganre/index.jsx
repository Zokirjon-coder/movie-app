import React from "react";
import { Button, Container } from "./styled";


const Ganre = ({ genreId }) => {
  const [genre, setGenre] = genreId;
  return (
    <Container>
      <Button active={genre === 0} onClick={() => setGenre(0)}>
        All
      </Button>
      <Button active={genre === 35} onClick={() => setGenre(35)}>
        Comedy
      </Button>
      <Button active={genre === 28} onClick={() => setGenre(28)}>
        Action
      </Button>
    </Container>
  );
};

export default Ganre;
