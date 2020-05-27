import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieList = () => {
  
  const [films, setFilms] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=nBc60CjQCp0NmTe5dbp3rcreCA2T0kHStRg2sJGP")
      .then(response => {
        // reference setState fn
        console.log(response);
        setFilms(response.data);
      })
      .catch(error => console.log("Error!", error));
  }, []);
  /*
  Dependency Arrays in useEffect:
  [] --> Means that we will only call the effect fn ONCE, directly after the initial render
  [stateVariable, propVariable] --> Include any number of state variables or prop variables in the dependency array. 
                    The effect fn will call after initial render and when one of these variable changes in value.
  empty --> run the effect fn after every rerender of the JSX. 
  */

  return (
    <div className="film">
      {films.map(film => (
        <MovieCard key={film.id} film={film} propTwo={true} propThree={setFilms} />
      ))}
    </div>
  );
};

export default MovieList;