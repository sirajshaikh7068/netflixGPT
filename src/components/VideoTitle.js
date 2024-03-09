import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-full aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="mt-12 py-6 font-medium w-1/4">{overview}</p>
      <div className=" ">
        <button className="p-4 px-12  bg-white rounded-lg hover:bg-opacity-50 text-black text-xl">
          ▶ Play
        </button>
        <button className="p-4 px-12 mx-4 bg-slate-400 rounded-lg text-black text-xl">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
