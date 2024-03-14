import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpComing } from "../utils/moviesSlice";

const useUpComing = () => {
  const dispatch = useDispatch();

  const getUpComing = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    dispatch(addUpComing(json.results));
  };

  useEffect(() => {
    getUpComing();
  }, []);
};

export default useUpComing;
