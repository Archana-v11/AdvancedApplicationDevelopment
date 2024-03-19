import React, { useRef } from "react";
import "../../assets/css/Register.css";
import { Link } from "react-router-dom";
function Register() {
  const username = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);
  const confirmpassword = useRef(null);

  const sub = (e) => {
    e.preventDefault();
    alert(username.current.value);
    console.log(password.current.value);  
  };

  return (
    <>
      <div className="register-page1">
      <br/><br/><br/><br/><br/><br/>
        <div className="register1">
          <center>
            <h2 style={{ fontSize: "27px" }}>Register Now...</h2><br/>
          </center>
          <form className="form-register1" onSubmit={sub}>
            <label htmlFor="email">Username / Email</label>
            <div className="register-input-email">
              <input
                type="text"
                ref={username}
                placeholder="   Enter your Username / Email"
                required
              />
            </div>
            
            <label htmlFor="mobile">Mobile Number</label>
            <div className="register-input-mobile">
              <input
                type="text"
                ref={mobile}
                placeholder="   Enter your Mobile Number"
                required
              />
            </div>
            

            <label htmlFor="password">Password</label>
            <div className="register-input-password">
              <input
                type="password"
                ref={password}
                minLength={8}
                maxLength={16}
                placeholder="   Enter your Password"
                required
              />
            </div>
              <label htmlFor="password">Confirm Password</label>
            <div className="register-input-password">
              <input
                type="password"
                ref={confirmpassword}
                minLength={8}
                maxLength={16}
                placeholder="   Re-Enter your Password"
                required
              />
            </div>
          <Link to='/login'> <button type="register-submit" className="reg_btn">Register</button></Link>
           <Link to='/login'> <div className="reg"><h5>Already have an account? Click Here..</h5></div></Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
