import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12  bg-black ">
        <input
          className="p-4 m-4 col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="px-4 py-2 m-4 col-span-2 bg-red-700 text-white rounded-lg">
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
