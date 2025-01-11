import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/img/Logo.png";

import { navLinks } from "../data/index";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  let element = document.querySelector(".navbar-collapse");

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);

    window.addEventListener("scroll", () => {
      element.classList.remove("show");
    });
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
          <img src={LogoImage} alt="Logo-img" style={{ height: "130px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <a href="https://www.youtube.com/@thrivchaos" target="_blank" rel="noopener noreferrer">
              <button className="btn rounded-3" style={{borderColor: "#1e2484", color: "#1e2484", transition: "all 0.3s ease",}} 
              onMouseEnter={(e) => {e.target.style.backgroundColor = "#1e2484"; e.target.style.color = "#fff";}} 
              onMouseLeave={(e) => {e.target.style.backgroundColor = "transparent"; e.target.style.color = "#1e2484";}}>Subscribe
              </button>
              </a>
              </div>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
