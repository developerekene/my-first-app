import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const moveToWelcomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>About Us</h1>
      <button
        onClick={() => {
          moveToWelcomePage();
        }}
      >
        Move to Welcome page
      </button>
    </div>
  );
};

export default AboutUs;
