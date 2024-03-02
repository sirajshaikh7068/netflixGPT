import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);

  const ToggleSignIn = () => {
    setSignInForm(!SignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg img"
        />
      </div>

      <form className="absolute bg-black w-3/12 my-48 p-12 mx-auto left-0 right-0 text-white bg-opacity-70">
        <h1 className="text-3xl py-4 font-bold">
          {SignInForm ? "Sign In" : "SignUp"}
        </h1>
        {!SignInForm && (
          <input
            type="text "
            placeholder="Full Name"
            className="p-2 my-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="text "
          placeholder="EmailAddres"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="password "
          placeholder="PassWord"
          className="p-2 my-4 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md">
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
