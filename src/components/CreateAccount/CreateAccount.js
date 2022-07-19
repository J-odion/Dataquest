import { LockOutlined, MailOutlined, RedEnvelopeFilled, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  const initialValues = { Name: "", email: "", password: "", confirm: "" };
  const [FormValues, setFormValues] = useState(initialValues);

  return (
    <>
      <form className="create-sign-up-div">
        <div className="image-div">
          <img className="group-icon20" alt="img" src="group-121.svg" />
        </div>
        <div className="sign-up-text">
          <div className="text-header">
            <h2>Create new Account</h2>
            <h4>
              Already A Member? <a href="#">Log In </a>
            </h4>
          </div>
        </div>
        <div className="text-body">
          <div className="form-body">
            <div className="form-group">
              <label htmlFor="Name">{<UserOutlined style={{
                color: "rgba(0,0,0,1)",
                backgroundColor: "transparent",
              }} />}</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                placeholder="Enter Name"
                value={FormValues.Name}
                onChange={(e) =>
                  setFormValues({ ...FormValues, Name: e.target.value })
                }
              />
            </div>
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
            <div className="form-group">
              <label htmlFor="confirm">{<LockOutlined />}</label>
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder="Confirm password"
                value={FormValues.confirm}
                onChange={(e) =>
                  setFormValues({ ...FormValues, confirm: e.target.value })
                }
              />
            </div>

            {/* add checkbox  */}
            <div className="form-group">
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
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
