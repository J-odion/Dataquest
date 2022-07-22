import {
    LockOutlined,
    MailOutlined,
    RedEnvelopeFilled,
    UserOutlined,
  } from "@ant-design/icons";
  import { useState } from "react";
  import "./Signing.css";
  import { notification } from "antd";
import { Link } from "react-router-dom";

  
  const SignIn = () => {
    const initialValues = { Name: "", email: "", password: ""};
    const [FormValues, setFormValues] = useState(initialValues);
    
    const submitHandler = (e) => {
      e.preventDefault();
      //get saved user from local storage
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);
      console.log(user,'now');
      const email = parsedUser["email"];
      const password = parsedUser.password;
      console.log(email, password);
      if (email === FormValues.email && password === FormValues.password) {
        notification.success({
          message: "Login Successful",
          description: "Login Successful",
          placement: "topRight",
          duration: 2,
        });
        setTimeout(() => {
          window.location.href = "/";
        }
          , 2000);
      }
      else {
        notification.error({
          message: "Error",
          description: "Email or Password is incorrect",
          placement: "topRight",
          duration: 2,
        });
      }
    }

    
  
    return (
      <>
        <form className="create-sign-up-div" onSubmit={submitHandler}>
          <div className="image-div">
            <img className="group-icon20" alt="img" src="group-121.svg" />
          </div>
          <div className="sign-up-text">
            <div className="text-header">
              <h2>Welcome Back</h2>
              <h4>
                Please enter your details 
                
              </h4>
            </div>
          </div>
          <div className="text-body">
            <div className="form-body">
              <div className="form-group">
                <label htmlFor="email">{<MailOutlined />}</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={FormValues.email}
                  onChange={(e) =>
                    setFormValues({ ...FormValues, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">{<LockOutlined />}</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={FormValues.password}
                  onChange={(e) =>
                    setFormValues({ ...FormValues, password: e.target.value })
                  }
                />
              </div>
  
              {/* add checkbox  */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Create an account means you are okay with our{" "}
                  <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                <div style={{
                  display: "block"
                }}>
                  <h3>Don't have an account yet? please sign up  <Link to="/CreateAccount">Register</Link> </h3>
                </div> 

              </div>
            </div>
          </div>
        </form>
      </>
    );
  };
  
  export default SignIn;
  