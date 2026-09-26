import React, { useState } from "react";
import Bannner from "../componants/Bannner";
import Axios from "../useHooks/useAxios";
import { useNavigate } from "react-router-dom";

const BookService = ({ service }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceId: "",
    serviceLocation: "",
    contact: "",
    communicationMethods: {
      text: false,
      email: false,
      call: false,
    },
    address: "",
    date: "",
    time: "",
    problemDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (["text", "email", "call"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        communicationMethods: {
          ...prev.communicationMethods,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedCommunication = Object.keys(
        formData.communicationMethods
      ).filter((key) => formData.communicationMethods[key]);

      const payload = {
        serviceId: formData.serviceId,
        serviceLocation: formData.serviceLocation,
        contact: formData.contact,
        communication: selectedCommunication,
        address: formData.address,
        date: formData.date,
        time: formData.time,
        problemDescription: formData.problemDescription,
      };

      const booking = await Axios.post("/booking", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (booking.status === 200) {
        window.alert("Booking successful");
        navigate("/");
      } else {
        window.alert("Booking failed");
      }
    } catch (error) {
      window.alert("Booking error: " + error.message);
      console.log("Error during booking service:", error);
    }
  };

  return (
    <>
      <Bannner />
      <h1 className="heading">Book Service</h1>
      <form
        className="auth-cnt"
        style={{ flexDirection: "row" }}
        onSubmit={handleSubmit}
      >
        <div className="form">
          {/* Choose Service */}
          <div className="flex-column">
            <label htmlFor="service">Choose Service</label>
          </div>
          <div className="inputForm2">
            <select
              id="service"
              name="serviceId"
              className="input"
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              {service.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Service Location */}
          <div className="flex-column">
            <label htmlFor="serviceLocation">Service Location</label>
          </div>
          <div className="inputForm">
            <input
              id="serviceLocation"
              name="serviceLocation"
              type="text"
              className="input"
              placeholder="Enter Service Location"
              value={formData.serviceLocation}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact */}
          <div className="flex-column">
            <label htmlFor="contact">Contact</label>
          </div>
          <div className="inputForm">
            <input
              id="contact"
              name="contact"
              type="tel"
              className="input"
              placeholder="Enter Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          {/* Preferred Communication Methods */}
          <div className="flex-column">
            <label>Preferred Method of Communication</label>
          </div>
          <div className="inputForm checkbox-group">
            {["text", "email", "call"].map((method) => (
              <label
                key={method}
                style={{
                  margin: "10px 20px",
                  gap: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  name={method}
                  checked={formData.communicationMethods[method]}
                  onChange={handleChange}
                />
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="form">
          {/* Address */}
          <div className="flex-column">
            <label htmlFor="address">Address</label>
          </div>
          <div className="inputForm">
            <input
              id="address"
              name="address"
              type="text"
              className="input"
              placeholder="Enter Full Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date and Time */}
          <div className="flex-column">
            <label>Date and Time</label>
          </div>
          <div className="inputForm2">
            <input
              type="date"
              name="date"
              className="input"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              className="input"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          {/* Problem Description */}
          <div className="flex-column">
            <label htmlFor="problemDescription">Problem Description</label>
          </div>
          <div className="inputForm">
            <input
              id="problemDescription"
              name="problemDescription"
              className="input"
              placeholder="Describe the issue or areas of concern"
              value={formData.problemDescription}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="button-submit">
            Book Service
          </button>
        </div>
      </form>
    </>
  );
};

export default BookService;
