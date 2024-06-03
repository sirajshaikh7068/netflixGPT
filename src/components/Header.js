import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSelectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const TogglesetIsShown = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="absolute px-8 py-2 z-20 w-full  flex justify-between bg-gradient-to-b from-black">
      <Link to={"/browse"}>
        <img className="w-40" src={LOGO} alt="logo"></img>
      </Link>

      {user && (
        <div className="flex p-2  ">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white"
              onChange={handleSelectLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="my-2 mx-4 text-white px-4 py-2 bg-green-600 rounded-lg"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPTSearch"}
          </button>

          <div className="flex ">
            <img
              onClick={TogglesetIsShown}
              className="w-12 h-12 rounded-lg cursor-pointer m-2 "
              src={USER_ICON}
              alt="usericon"
            />
            {isShown ? (
              <button onClick={handleSignOut} className="font-bold text-white">
                (Log Out)
              </button>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
