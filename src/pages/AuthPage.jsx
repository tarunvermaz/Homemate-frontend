import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../useHooks/useAxios";

const AuthPage = ({ head, service }) => {
  const navigate = useNavigate();
  const [isEmployee, setIsEmployee] = useState(false);
  const [profession, setProfession] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name = {}, email = {}, password = {} } = e.target.elements;
      if (head === "Register") {
        const payload = {
          username: name.value,
          email: email.value,
          password: password.value,
        };
        if (isEmployee) {
          payload.profession = profession;
        }

        const user = await Axios.post("/auth/register", payload);
        navigate("/login");
      } else {
        const user = await Axios.post("/auth/login", {
          email: email.value,
          password: password.value,
        });
        localStorage.setItem("token", user.data.token);
        navigate("/");
      }
    } catch (error) {
      window.alert(error.response.data.error);
      console.log("Error during authentication:", error.response.data.error);
    }
  };

  return (
    <div className="auth-cnt">
      <h1 className="heading">{head}</h1>
      <form className="form" onSubmit={handleSubmit}>
        {head === "Register" && (
          <>
            <div className="flex-column">
              <label htmlFor="name">Name</label>
            </div>
            <div className="inputForm">
              <input
                id="name"
                type="text"
                className="input"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="radio-section">
              <label>Are you an Service Provider?</label>
              <div className="radio-options">
                <label>
                  <input
                    type="radio"
                    name="employee"
                    value="yes"
                    onChange={() => setIsEmployee(true)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="employee"
                    value="no"
                    defaultChecked
                    onChange={() => setIsEmployee(false)}
                  />
                  No
                </label>
              </div>
            </div>
            {isEmployee && (
              <div className="inputForm2">
                <select id="service" className="input">
                  {service.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        <div className="flex-column">
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputForm">
          <input
            id="email"
            type="text"
            className="input"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="flex-column">
          <label htmlFor="password">Password</label>
        </div>
        <div className="inputForm">
          <input
            id="password"
            type="password"
            className="input"
            placeholder="Enter Your Password"
          />
        </div>

        <div className="flex-row">
          <span className="span">Forgot password?</span>
        </div>

        <button type="submit" className="button-submit">
          {head}
        </button>

        {head === "Register" ? (
          <Link to={"/login"} className="p">
            Already have an account? <span className="span">Login</span>
          </Link>
        ) : (
          <Link to={"/register"} className="p">
            Don't have an account? <span className="span">Sign Up</span>
          </Link>
        )}
      </form>
    </div>
  );
};

export default AuthPage;
