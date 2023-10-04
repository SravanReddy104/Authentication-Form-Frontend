import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "../Axios";
import "bootstrap/dist/css/bootstrap.min.css";


const Auth = ({type}) => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    useEffect(()=>{
        emailRef.current.focus()
    })

    console.log(type)
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(Boolean);
  const signupHandler = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;


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
      !password.match("[^a-zA-Z0-9]")
    ) {
      // setEmail("");
      // setPassword("");
      setLoading(false);
      setMsg("Enter valid credentials with strong password");
    } else {
      try {
        const resp = await axios.post("/getSignUp", {
        email: email,
        password: password,
        name:name,
          role: "admin",
        });
        emailRef.current.value = ""
        passwordRef.current.value= ""

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
  const loginHandler = async (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email)
    e.preventDefault();
    console.log(emailRef.current.value)
    setLoading(true);
    try {
      const resp = await axios.post("/getLogin", {
        email: email,
        password: password,
      });
      emailRef.current.value = ""
      passwordRef.current.value=""
      console.log(resp);
      setMsg("ok");
      setLoading(false);
      if (resp.status === 200) {
        localStorage.setItem("token",`${resp.data}`)
        navigate("/home", { state: { email: email }, replace:true});
      }
     
      
    } catch (e) {
      console.log(e.messages);
      setLoading(false);
    }

    console.log(email, password);
  };
  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">{type}</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
            //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              value={emailRef.current.value}
              ref={emailRef}
            />
          </div>
          {type === "Signup" &&
               <div className="form-group mt-3">
               <label>Username</label>
               <input
                 type="text"
                 className="form-control mt-1"
               //   onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter Username"
                 value={nameRef.current.value}
                 ref={nameRef}
               />
             </div>}
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            //   onChange={(e) => setPassword(e.target.value)}
              value={passwordRef.current.value}
              ref={passwordRef}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={type === "Login"?loginHandler:signupHandler}
            >
              {loading ? "loading..." : "submit"}
            </button>
            {type === "Signup"?(
                   <div>
                   click here to <Link to="/login">Login </Link>
                 </div>
            ):""}
         
            <div className="badge bg-info fs-5 text-center text-wrap">
              {msg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
