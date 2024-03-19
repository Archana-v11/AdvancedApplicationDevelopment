import React, { useRef } from "react";
import "../../assets/css/Login.css";
import { Link } from "react-router-dom";
function Login() {
  const username = useRef(null);
  const password = useRef(null);

  const sub = (e) => {
    e.preventDefault();
    alert(username.current.value);
    console.log(password.current.value);  
  };

  return (
    <>
      <div className="login-page1"><br/><br/><br/><br/><br/><br/><br/>
        <div className="login1">
          <center>
            <h2 style={{ fontSize: "27px" }}>Login</h2>
          </center>
          <form className="form-login1" onSubmit={sub}>
            <label htmlFor="email">Username</label>
            <div className="input-email">
              <input
                type="text"
                ref={username}
                placeholder="   Enter your Username"
                required
              />
            </div>
            <br />

            <label htmlFor="password">Password</label>
            <div className="input-password">
              <input
                type="password"
                ref={password}
                minLength={8}
                maxLength={16}
                placeholder="   Enter your Password"
                required
              />
            </div>
           <Link to='/'> <button type="login submit" className="log_btn">Login</button></Link>
          <Link to='/register'>  <h5>New? Click Here..</h5></Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
