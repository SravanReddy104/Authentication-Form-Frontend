// import { useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";

const Home = () => {
  const loc = useLocation();

  const Profile = loc.state.email;
  
  return (
    <>
      <Navbar />
      <div>
        <h1>Home page</h1>
        <Link to={`/profile/:${Profile}`} style={{ padding: "10px" }}>
          Profile
        </Link>
      </div>
    </>
  );
};
export default Home;
