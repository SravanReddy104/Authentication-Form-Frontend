import { useEffect, useState } from "react";
import axios from "../Axios";
import { Link } from "react-router-dom";
const Profile = ({ id }) => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  useEffect(() => {
    console.log(id,"hello")
    const getInfo = async () => {
      try {
        const resp = await axios
          .get(`/info/${id}`, config)
          .then((resp) => resp.data);
        console.log(resp);
        console.log(resp, "users");
        setData(resp[0]);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    getInfo();
  }, [id]);

  return (
    <div>
      <p>Email Address: {data.email}</p>
      <p>Username: {data.name}</p>


      <p>Role: {data.role === "Admin" ? "Admin" : "user"}</p>
      {data.role === "admin" && (
        <p>
          <Link to={`http://localhost:3000/${id}/users`} replace={true}>
            Click to see All users
          </Link>
        </p>
      )}
    </div>
  );
};
export default Profile;
