import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "../Axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true)
    try {
      const resp = await axios.post("/getLogin", {
        email: email,
        password: password,
      });
     
      console.log(resp);
   
     
      setMsg(resp.data)
      setLoading(false)
      if(resp.data === "OK"){
          navigate("/home",{state:{email:email}
            
          })
      }
      setEmail("")
      setPassword("")
    } catch (e) {
      console.log(e.messages);
      setLoading(false)
    }

    console.log(email, password);
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              {loading ? "loading..." : "submit"}
              
            </button>
            <div className="badge bg-info fs-5 text-center text-wrap">{msg}</div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
