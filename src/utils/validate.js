export const ValidateData = (email, password, fullname) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isFullName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(fullname);

  if (!isEmailValid) return "Invalid email format";
  if (!isPasswordValid) return "Invalid Password";
  //   if (!isFullName) return "Invalid Full Name Format";

  return null;
};
