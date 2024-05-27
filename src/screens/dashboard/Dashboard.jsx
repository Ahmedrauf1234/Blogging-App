import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase/firebaseconfig";
import Swal from "sweetalert2";

const Dashboard = () => {
  //=============================initializez==================>>
  const navigate = useNavigate();
  const titleval = useRef();
  const textAreaVal = useRef();
  const [data, setData] = useState([]);
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
  const Logout = async () => {
    await signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Sucessfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(function () {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //====================================End======================>>
  const formVal = (event) => {
    event.preventDefault();
    // console.log(titleval.current.value);
    // console.log(textAreaVal.current.value);
    data.push(
      { title: titleval.current.value, text: textAreaVal.current.value }
    );
    setData([ ...data]);
    // console.log(data);
  };
  //============================Delete Work======================>>
  const deleteBlog = (index)=>{
    data.splice(index , 1);
    setData([...data])
  }
 ;
  //=======================Edit Work==================>>
  const editBlog = async(index)=>{
    const updatedTitle = prompt('Enter Title');
    const updatedTitle2 = prompt('Enter Blog');

    data.splice(index , 1 , {
      title : updatedTitle,
      text : updatedTitle2
    })
    setData([...data])
   
    
  }

  return (
    <div>
      {/* ==================Heading================>> */}
      <h1 className="font-bold text-center text-3xl mt-3">Dashboard</h1>
      {/* ========================Logout btn=====================>> */}
      <div className=" text-center">
        <button
          onClick={Logout}
          className="ml-3  bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5"
        >
          Logout
        </button>
      </div>
      {/* ============================End====================>> */}
      <div
        style={{ marginLeft: "30px", marginRight: "30px" }}
        className=" rounded border-2 border-solid border-[#f0f0f0] p-10  bg-[#f0f0f0]  mt-10 "
      >
        <form onSubmit={formVal}>
          <input
            required
            className=" mt-2 border border-solid border-gray-500 w-[100%] py-[10px] px-[20px]"
            type="text"
            placeholder="Title"
            ref={titleval}
          />
          <input
            required
            className=" mt-2 border border-solid border-gray-500 w-[100%] py-[20px] px-[20px]"
            type="text"
            placeholder="Text..."
            ref={textAreaVal}
          />
          <button
            type="submit"
            className=" bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5"
          >
            Punlish Blog
          </button>
        </form>
      </div>
      {/* //================================Renderation===========================>> */}
      <div className="ml-10">
      <h1 className="font-bold text-2xl">My Blogs</h1>
      </div>
    
      {data.length > 0 ?  data.map((items , index)=>{
        return <div key={index}
        style={{ marginLeft: "30px", marginRight: "30px" }}
        className=" rounded border-2 border-solid border-[#f0f0f0] p-10  bg-[#f0f0f0]  mt-10 "> 
        <h1 className="text-2xl font-bold mb-5">{items.title}</h1>
        <li className="list-none">{items.text}</li>
        <button onClick={()=>deleteBlog(index)}  className=" bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5" >Delete Blog</button>
        <button onClick={()=>editBlog(index)} className=" ml-3 bg-[#0079ff] text-white border-none rounded px-3 py-1 mt-5" >Edit Blog</button>

      </div>
      }):<h1 className="text-center text-2xl">No Blogs Found</h1>}
    </div>
  );
};

export default Dashboard;
