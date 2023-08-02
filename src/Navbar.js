import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

// Import your logo image (replace the placeholder with your image URL)
import logoImage from "./logo1.png"; // Replace this with the actual path to your logo image.

const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow((current) => !current);
  };

  return (
    <header>
      <div className="logo">
        {/* Make the logo a clickable link to the home page */}
        <Link to="/">
          <img src={logoImage} alt="nextCode24" />
        </Link>
      </div>
      <div id={show && `d-menu`} className={`display-menu`}>
        <Link className="menu" to={"/"}>
          Home
        </Link>
        <Link className="menu" to={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="menu" to={"/services"}>
          Services
        </Link>
        <Link className="menu" to={"/about"}>
          About
        </Link>
      </div>

      <button onClick={handleShow} className="toggle">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Navbar;
