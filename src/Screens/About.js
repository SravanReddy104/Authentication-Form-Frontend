import { Link } from "react-router-dom";
const About = () => {
    return (
      <>
       <h1 style={{ textAlign: "center" }}>About page</h1>
       <Link to="/profile/" style={{ padding: "10px" }} replace={true}>
        Click to See Profile
      </Link>
      </>
   
    );
  };
export default About;