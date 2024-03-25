import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import loginbg from "../../assests/image/loginbg.jpg";


const Login = () => {

  const [formData, setFormData] = useState({});
  const [loading , setLoading] = useState(false)
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://65a8d210219bfa371867b1d0.mockapi.io/api/fakeapi")
      .then((response) => {
        console.log(response.data);
        const loginData = response.data.find((user) => user.email === email);
        if (loginData) {
          console.log("logged in");
          navigate("/admin");
        } else {
          console.log("User not found");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };
  return (
    <React.Fragment>
      <div className="bodycontainer">
        <div className="container">
          <div className="login-box">
            <h2>Admin SignIn Portal</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email"
                />
                <label>Email</label>
              </div>

              <div className="input-box">
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password"
                />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="#">Forgot your password?</a>
              </div>
              <button type="submit" className="btnlogin" >
               Login
              </button>
         
              <div className="signup-link">
                <Link to="/">Register here</Link>
              </div>
            </form>
            
          </div>
          
          {[...Array(50)].map((_, i) => (
            <span key={i} style={{ "--i": i }}></span>
          ))}
          {/* <ReactLoading
                type="spinningBubbles"
                color="white"
                height={150}
                width={50}
          /> */}
          

        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
