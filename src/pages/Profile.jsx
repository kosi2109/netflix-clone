import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { logout, selectUser } from "../features/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Profile.css"

function Profile() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(logout)    
        })
    }
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            className="profile__avator"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
                <button className="profile__signout" onClick={logoutHandler}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
