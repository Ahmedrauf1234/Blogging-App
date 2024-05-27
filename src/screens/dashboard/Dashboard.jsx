import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase/firebaseconfig";
import Swal from "sweetalert2";

const Dashboard = () => {
  //=============================initializez==================>>
  const navigate = useNavigate();
  //=======================On auth state changed================>>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      setTimeout(function () {
        navigate("/home");
      }, 1000);
    }
  });
  //=======================End==================>>
  const  Logout  = async ()=>{
   await signOut(auth).then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logout Sucessfully",
        showConfirmButton: false,
        timer: 1500
        });
      setTimeout(function(){
          navigate('/')
      },2000)
    }).catch((error) => {
      
    });
  }
  return (
    <div>
      <h1 className="font-bold text-center text-3xl mt-3">Dashboard</h1>
     <div className="m-auto text-center">
     <button onClick={Logout} className="ml-3  bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5">Logout</button>
     </div>
    <div className="border-2 border-solid border-[#f0f0f0] p-10 w-[900px] bg-[#f0f0f0] m-auto mt-10  ">
      
    <div className="">
        <input required className=" mt-2 border border-solid border-gray-500 w-[700px] py-[10px] px-[20px]" type="text" placeholder="Title" />
        <input required className=" mt-2 border border-solid border-gray-500 w-[700px] py-[20px] px-[20px]" type="text" placeholder="Text..." />
        </div>
        <button className=" bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5">Punlish Blog</button>
       
        
    </div>
    
    </div>
  );
};

export default Dashboard;
