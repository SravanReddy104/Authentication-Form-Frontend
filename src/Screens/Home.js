// import { useEffect } from "react";
import Navbar from "../Navbar";
// import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";
import Profile from "./Profile";
import "./Style.css"
const Home = () => {
  const loc = useLocation();
  console.log(loc,"loc")

  const profile = loc.state.email;
  
  return (
    <>
      <Navbar />
      <div className="container">
        <p className="title">Welcome to Site</p>
        {/* <h2>{localStorage.getItem("token")}</h2> */}
        <Profile id={profile}/>
      </div>
    </>
  );
};
export default Home;
