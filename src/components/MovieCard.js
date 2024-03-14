import React from "react";
import { IMG_CDN_POSTER } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="poster img" src={IMG_CDN_POSTER + posterPath}></img>
    </div>
  );
};

export default MovieCard;
