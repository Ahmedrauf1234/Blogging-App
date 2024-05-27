import React, { useRef } from "react";
import "./style.scss";
import { auth } from "../../config/firebase/firebaseconfig";
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //========================= use refs===================>>
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()
  //=======================End========================>>
  const submitForm = (event) => {
    event.preventDefault();

     signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    password.value = ''
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(function(){
        navigate('/welcome')
      },2000)
  })
  .catch((error) => {
    const errorMessage = error.message;
    Swal.fire({
        icon: "error",
        title: "Invalid Email Password"
      });
      
  })

  };
  return (
    <div className="main-div">
      <div className="box">
        <h1>Login</h1>
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
            Login
          </button>
        </form>
        <div className="register">
          <p>
            Don't have an account? <a href="./register">Register</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
