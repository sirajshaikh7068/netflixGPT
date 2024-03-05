import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 z-10 w-screen  flex justify-between bg-gradient-to-b from-black">
      <img
        className="w-40"
        src="https://w7.pngwing.com/pngs/26/116/png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail.png"
        alt="logo"
      ></img>

      {user && (
        <div className="flex p-2  ">
          <img
            className="w-12 h-12 "
            src="https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="usericon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Log Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
