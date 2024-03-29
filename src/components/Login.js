import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { WEB_LOGO } from "../utils/constant";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const handleClickButton = () => {
    // console.log(email.current.value, password.current.value);
    const massege = ValidateData(email.current.value, password.current.value);
    setErrorMessage(massege);
    if (massege) return;

    if (!SignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "siraj shaikh",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  const ToggleSignIn = () => {
    setSignInForm(!SignInForm);
  };

  return (
    <div className="start-0">
      <Header />
      <div className="absolute">
        <img src={WEB_LOGO} alt="bg img" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 my-40 p-12 mx-auto left-0 right-0 text-white bg-opacity-70"
      >
        <h1 className="text-3xl py-4 font-bold">
          {SignInForm ? "Sign In" : "SignUp"}
        </h1>
        {!SignInForm && (
          <input
            ref={fullname}
            type="text "
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text "
          placeholder="EmailAddres"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          ref={password}
          type="password "
          placeholder="PassWord"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={handleClickButton}
        >
          {SignInForm ? "Sign In" : "SignUp"}
        </button>
        <p onClick={ToggleSignIn} className="cursor-pointer">
          {SignInForm ? "New to Netflix? Sign up" : "New to Netflix? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
