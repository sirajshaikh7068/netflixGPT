import React, { useState } from "react";
import { IMG_CDN_POSTER } from "../utils/constant";
import VideoBackground from "./VideoBackground";

const MovieCard = ({ posterPath, data }) => {
  const [tshow, setTshow] = useState(false);

  if (!posterPath) return null;

  const handleCard = () => {
    setTshow(true);
  };

  return (
    <div className="w-48 pr-4">
      <button className="" onClick={handleCard}>
        <img alt="poster img" src={IMG_CDN_POSTER + posterPath}></img>
      </button>
    </div>
  );
};

export default MovieCard;
