import React, { useState } from "react";
import "./Auth.css";
import axios from "../Axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    var mailFormat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    console.log("hello in submit");
    if (email === "" || password === "") {
      
     
      
      setLoading(false);
      setMsg("Enter Credentials");

    } else if (
      !email.match(mailFormat) ||
      password.length <= 6 ||
      password.match("[^a-zA-Z0-9]")
    ) {
      setEmail("");
      setPassword("");
      setLoading(false);
      setMsg("Enter valid credentials with strong password");
    

    } else {
      try {
        const resp = await axios.post("/getSignUp", {
          email: email,
          password: password,
          role: "user",
        });
        setEmail("");
        setPassword("");

        setLoading(false);
        setMsg(resp.data);
        console.log(resp, " resp");
      } catch (e) {
        console.log(e.messages);
        setLoading(false);
      }
    }

    console.log(email, password);
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
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
            <div>
              click here to <Link to="/login">Login </Link>
            </div>
            <div className="badge bg-info fs-5 text-center text-wrap">
              {msg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
