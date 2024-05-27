import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/home/Home";
import Login from "../../screens/login/Login";
import Navbar from "../../components/navbar/Navbar";
import Register from "../../screens/register/Register";
import Welcome from "../../screens/welcome/Welcome";
import Dashboard from "../../screens/dashboard/Dashboard";
import Allblogs from "../../screens/allblogs/Allblogs";
import Profile from "../../screens/profile/Profile";


const Routerconfig = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="allblogs" element={<Allblogs />} />
        <Route path="profile" element={<Profile />} />






      </Routes>
    </BrowserRouter>
  );
};

export default Routerconfig;
