import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();

    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];

    dispatch(addNowPlayingVideo(trailer));
  };
  useEffect(() => {
    getMoviesVideo();
  }, [[]]);
};

export default useMovieTrailer;
