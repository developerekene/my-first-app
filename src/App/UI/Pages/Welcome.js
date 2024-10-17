import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const naviToAbout = () => {
    navigate("/about");
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button
        onClick={() => {
          naviToAbout();
        }}
      >
        Moveto About Page
      </button>
    </div>
  );
};

export default Welcome;
