import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "../Axios"
import { Link } from "react-router-dom";
const Profile = () => {
  const [data,setData] = useState([])
  const {profile} = useParams()
  useEffect(() => {
    const getInfo = async () => {
      try{
      const resp = await axios.get(`/info/${profile}`).then((resp)=>resp.data);
      console.log(resp)
      console.log(resp,"users")
      setData(resp[0])     
      }catch(e){
        console.log(e)
      }
    };
    getInfo()
  }, [profile]);

 
    return (
    <div>
      <h1 style={{ textAlign: "center" }}>Profile Page of {data.email}</h1>
      <h3>Role: {data.role === "Admin"?"Admin":"user"}</h3>
      {data.role === "admin" && (
        <div>
          <Link to={`http://localhost:8000/${profile}/users`}>Click to see All users </Link>
        </div>
        

      )}
    </div>);
    
  };
  export default Profile;