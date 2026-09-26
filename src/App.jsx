import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import AuthPage from "./pages/AuthPage";
import Axios from "./useHooks/useAxios";
import BookService from "./pages/BookService";
import Dashboard from "./admin-pages/Dashboard";
import AdminUsers from "./admin-pages/AdminUsers";
import AdminServices from "./admin-pages/AdminServices";
import AdminBooking from "./admin-pages/AdminBooking";
import AdminProfile from "./admin-pages/AdminProfile";

const App = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const location = window.location.pathname;
  const getUser = async () => {
    try {
      setLoading(true);
      const user = await Axios.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser(user.data);
    } catch (error) {
      localStorage.removeItem("token");
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };
  const getServices = async () => {
    try {
      setLoading(true);
      const services = await Axios.get("/services");
      setService(services.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
    getServices();
  }, []);

  // Protected route if user.role === "admin"
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  const ProtectedRoute = ({ element }) => {
    if (user && user.user.role === "admin") {
      return element;
    } else {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home service={service.slice(0, 3)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service service={service} />} />
          <Route
            path="/book-service"
            element={<BookService service={service} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<AuthPage service={service} head={"Login"} />}
          />
          <Route
            path="/register"
            element={<AuthPage service={service} head={"Register"} />}
          />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route
            path="/admin/users"
            element={<ProtectedRoute element={<AdminUsers />} />}
          />
          <Route
            path="/admin/services"
            element={<ProtectedRoute element={<AdminServices />} />}
          />
          <Route
            path="/admin/bookings"
            element={<ProtectedRoute element={<AdminBooking />} />}
          />
          <Route
            path="/admin/profile"
            element={<ProtectedRoute element={<AdminProfile />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
