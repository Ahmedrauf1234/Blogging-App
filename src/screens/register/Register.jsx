import React, { useRef } from "react";
import "./style.scss";
import { auth } from "../../config/firebase/firebaseconfig";
import Swal from "sweetalert2";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
  //========================= use refs===================>>
  const navigate = useNavigate()
  const email = useRef();
  const password = useRef();
  //=======================End========================>>
  const submitForm = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.data , "Register sucessfully");
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "You are registered",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(function(){
      navigate('/login')
    },2000)
    email.current.value = ''
    password.current.value = ''
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    Swal.fire("This Email already in used");
    email.value = ''
    password.value = ''
  });


    

  };
  return (
    <div className="main-div">
      <div className="box">
        <h1>Register</h1>
        <form onSubmit={submitForm}>
          <div className="input-box">
            <input id="email" required type="email" name="" ref={email} />
            <label className="label" htmlFor="email">
              Email{" "}
            </label>
          </div>
          <div className="input-box">
            <input id="pass" required type="password" name="" ref={password} />
            <label htmlFor="pass">Password </label>
          </div>
          <div className="parant">
            <div>{/* <a onClick={frogetPass}>Forgot Password?</a> */}</div>
          </div>
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
