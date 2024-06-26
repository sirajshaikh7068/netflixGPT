import React from "react";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" ">
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube.com/embed/e1k1PC0TtmE?si=" +
          trailerVideo +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;playlist"
        frameBorder={"0"}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
