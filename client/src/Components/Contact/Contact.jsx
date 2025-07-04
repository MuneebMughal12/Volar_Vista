import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

const Forms = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        formData,
        type,
      });

      if (response.status === 200) {
        alert("Email Sent Successfully!");
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };
  return (
    <div style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>

      <div className="bg-[#0C1E1E] text-white px-2 ">
        {/* Hero Section */}
        <div className="text-center py-16" style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
          <h3 className="text-2xl uppercase">Let's Connect</h3>
          <h1 className="text-5xl font-bold">INTERESTED IN SKY-LIVING</h1>
          <p className="mt-4 text-2xl">
            We are here for your assistance. Please find our contact details
            mentioned below.
          </p>
          <p className="font-semibold italic">See You Soon!</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Address and Info */}
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full">
          <h2 className="text-[1.7rem] font-semibold mb-4">Contact Information</h2>
          <p className="mb-2 text-2xl font-bold">Address:</p>
          <p className="text-lg">Plot No.9587, Block No.14, Section No.180, Kwabenya, District 006,
            Greater Accra,Ghana.</p>

          <p className="mt-4 text-2xl font-bold">Phone/WhatsApp:</p>
          <p className="text-lg">+233 24 030 1874
          </p>

          <p className="mt-4 text-2xl font-bold">Email:</p>
          <p className="text-lg">pioneerghanaltd@gmail.com</p>

          <p className="mt-4 text-3xl font-bold">Social Media:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-4xl text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="#" className="text-4xl text-pink-600 hover:text-pink-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-4xl text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black p-8 rounded-lg shadow-2xl h-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={(e) => handleSubmit(e, "contact")}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Write a message"
              onChange={handleChange}
              className="border p-2 rounded w-full mt-4"
              rows="4"
            ></textarea>
            <button className="px-6 py-2 mt-4 text-white bg-black rounded-full hover:bg-white hover:text-black border border-black">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96 mt-8">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1236.7846714231725!2d-0.2452746!3d5.6961493!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDEnNDUuOSJOIDDCsDE0JzQxLjIiVw!5e1!3m2!1sen!2s!4v1751292805711!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Forms;
