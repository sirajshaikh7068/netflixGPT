import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTION, GEMINI_KEY } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const REACT_GEMINI_KEY = "AIzaSyCgX0ZYxKNvHrQUr0Tsd8q3ub3sofEJrs0";
  const genAI = new GoogleGenerativeAI(REACT_GEMINI_KEY);

  const searchMovietmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const gptQuery =
      "Act as movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ".only give me name of 5 movies,comma seperated like example result give ahead.Example result:Gadar,Koi mil gaya,Animal,Jawaan,Pathan";

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const fr = text.split(",");

    console.log(fr);

    const promiseArray = fr.map((movie) => searchMovietmdb(movie));

    const tmdbresult = await Promise.all(promiseArray);

    console.log(tmdbresult);

    dispatch(addGptMovieResult({ movieName: fr, movieResults: tmdbresult }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12  bg-black "
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 col-span-2 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
