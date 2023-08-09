import React, { useContext, useState } from "react";
import { Context } from "../ContextApi/contextApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [alert, setalert] = useState(false);
  const [invalidNameAlert, setInvalidNameAlert] = useState(false);
  const [invalidPasswordAlert, setInvalidPasswordAlert] = useState(false);
  const [invalidEmailAlert, setInvalidEmailAlert] = useState(false);
  const [ wrongPassword , setWrongPassword] = useState(false)
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    setLogin
  } = useContext(Context);
  const navigate=useNavigate()

  const handleSubmit = () => {
    let characters = /^[A-Za-z\s]*$/;
    let emailAddress = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setalert(true);
    } else if (!characters.test(name)) {
      setInvalidNameAlert(true);
    } else if (password.length < 8) {
      setInvalidPasswordAlert(true);
    } else if (!emailAddress.test(email)) {
      setInvalidEmailAlert(true);
    } else if(password !== confirmPassword){
      setWrongPassword(true)
    }
    else {
      localStorage.setItem(
        email,
        JSON.stringify({ username: name, emailId: email, password: password })
      );
      console.log("submitted")
      setalert(false);
      setInvalidNameAlert(false)
      setInvalidPasswordAlert(false)
      setInvalidEmailAlert(false)
      setLogin(true)
      navigate("/")
    }
  };

  return (
    <div className="flex flex-col items-center justify-around w-1/3 min-w-[250px] h-[400px] px-4 py-4 fixed top-[40%] left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white shadow-lg rounded-[5px]">
      <h2 className="text-blue-500 font-medium text-3xl">Sign in</h2>
      <input
        type="text"
        placeholder="Name"
        className="w-full outline-none border-b-2 border-0 border-blue-500 px-2 pb-2"
        onChange={(e) => setName(e.target.value)}
      />
      {invalidNameAlert && <p className="text-red-500 text-xs self-start -mt-4">Invalid Name</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full outline-none border-b-2 border-0 border-blue-500 px-2 pb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      {invalidEmailAlert && <p className="text-red-500 text-xs self-start -mt-4">Invalid Email</p>}
      <input
        type="password"
        placeholder="Password"
        className="w-full outline-none border-b-2 border-0 border-blue-500 px-2 pb-2"
        onChange={(e) => setPassword(e.target.value)}
      />
      {invalidPasswordAlert && <p className="text-red-500 text-xs self-start -mt-4">Password should contain 8 or more than 8 characters</p>}
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full outline-none border-b-2 border-0 border-blue-500 px-2 pb-2"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {wrongPassword && <p className="text-red-500 text-xs self-start -mt-4">wrong password , Try Again</p>}
      <button
        className="bg-blue-500 text-white font-semibold w-1/2 min-w-[150px] h-[40px] rounded-md hover:border-2 hover:border-black"
        onClick={handleSubmit}
      >
        Sign Up
      </button>
      {alert && <p className="text-red-500 text-xs self-start -mt-4">Fill all the req details</p>}
    </div>
  );
}
