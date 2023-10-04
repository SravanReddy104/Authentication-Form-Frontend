import { Link, useNavigate } from "react-router-dom";
import axios from "./Axios";
import { useEffect, useState } from "react";
const Users = () => {
  const [search,setSearch]=useState("")
  const [users, setUsers] = useState([]);
  const [data1,setData1] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
        .get("/lokesh@gmail.com/users")
        .then((res) => res.data);
      console.log(data);
      setUsers(data);
      setData1(data)

    };
    getData();
  }, []);
  const searchHandler = (e)=>{
    console.count("in search handler")
    setSearch(e.target.value)
   if(search === ""){
    setData1(users)
   }else{
    console.log("in")
   const fi = users.filter((el)=>(el.email.includes(search)))
   console.log(fi)
   setData1(fi)
   }
   
  }
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="input-group mt-3 mb-1" >
       <input type="text"  onChange={(e)=>searchHandler(e)} className="form-control" placeholder="Enter Keyword to search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
       <div className="input-group-append">
       {/* <button onClick={searchHandler}className="btn btn-outline-secondary" type="button">Button</button> */}
      </div>
     </div>

      <div className="card">
        <div className="card-header">
          <ul className="nav nav-pills w-100">
            <li className="nav-pill active">
              <Link className="nav-link">Users</Link>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th width="200px">Role</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((data, i) => (
                <tr key={i}>
                  <th scope="row">{i}</th>
                  <td>{data.email}</td>
                  <td> {data.password}</td>
                  <td> {data.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {data1.length === 0 && <p className="text-center">No users found!</p>}
        </div>
      </div>
    </div>
  );
};
export default Users;
