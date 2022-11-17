import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/user/userSlice";
import { useDispatch , useSelector} from "react-redux";
import Profile from "./pages/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth ,(userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    })

    return unsubscribe;
  },[dispatch])

  return (
    <div className="app">
      {user ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
