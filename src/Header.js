import React from "react";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      <div className="header" onClick={() => {
          handleClick()
      }}>
        <h1>Project Management System</h1>
      </div>
    </>
  );
};

export default Header