import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase/firebaseconfig';

const Profile = () => {

    //=============================initializez==================>>
    const navigate = useNavigate();
    //=======================On auth state changed================>>
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
        } else {
         setTimeout(function(){
         navigate('/home')
         },1000)
        }
      });
      //=======================End==================>>
    
  return (
    <div>Profile</div>
  )
}

export default Profile