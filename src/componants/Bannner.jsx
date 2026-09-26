import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../useHooks/useAxios";

const Bannner = () => {
  const [user, setuser] = useState(null);
  const getUser = async () => {
    try {
      const user = await Axios.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setuser(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleLogout = () => {
    // Confirm
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) {
      return; // User clicked "Cancel", do nothing
    }
    localStorage.removeItem("token");
    setuser(null);
    window.location.reload();
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);
  return (
    <div>
      <header className="header">
        <div>
          <p className="flex items-center gap-2 ">
            <img src="../images/call-logo2.png" alt="" />
            Call:+917879305711
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 ">
            <img src="../images/mail-logo2.png" alt="" />
            Mail:vermaop6262@gmail.com
          </p>
        </div>
      </header>
      <nav className="header2">
        <div className="logo">
          <img src="../images/logo.png" alt="" />
        </div>
        <div className="menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/Service">
              <li>Service</li>
            </Link>
            <Link to="/Contact">
              <li>Contact Us</li>
            </Link>

            {user ? (
              <button className="login-btn" onClick={handleLogout}>
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="login-btn">Log in</button>
              </Link>
            )}
          </ul>
        </div>
        <div className="menu-toggle">
          <svg
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Bannner;
