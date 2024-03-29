import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { WEB_LOGO } from "../utils/constant";

const GptPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={WEB_LOGO} alt="bg img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptPage;
