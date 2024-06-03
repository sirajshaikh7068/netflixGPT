import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      <div>
        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
