import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../useHooks/useAxios";

const Fourth = ({ service }) => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const user = await Axios.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(user.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUser();
    }
  }, []);
  return (
    <>
      <div className="heading">
        <h1 className='text-5xl font-bold'>OUR SERVICES</h1>
      </div>
      <div className="our-services">
        {service.map((service) => (
          <div className="service-box" key={service._id}>
            <div className="img-box flex justify-center"> 
              <img src={service.image} alt="" />
            </div>
            <div className="service-price">
              <p>₹ {service.price}</p>
            </div>
            <div className="decription">
              <h1 >{service.name}</h1>
              <p>{service.description}</p>
            </div>
            {user ? (
              <Link className="service-btn" to={`/book-service`}>
                <p>Buy Now</p>
              </Link>
            ) : (
              <Link className="service-btn" to={`/login`}>
                <p>Buy Now</p>
              </Link>
            )}
          </div>
        ))}
      </div>

      {service.length === 3 && (
        <div className="button-mid">
          <Link to="/service">
            <button className="button">View More</button>
          </Link>
        </div>
      )}
      <hr />
      <div className="heading">
        <h1 className='text-5xl font-bold'>WHAT OUR CLIENTS SAY</h1>
      </div>
    </>
  );
};

export default Fourth;
