import "../style.css"
import { Link } from 'react-router-dom';
import { useEffect } from "react"

export default function Head() {

  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    const handleToggle = () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    const handleCloseMenu = () => {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    };

    if (menuToggle) {
      menuToggle.addEventListener("click", handleToggle);
    }

    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleCloseMenu);
    });

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", handleToggle);
      }
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleCloseMenu);
      });
    };
  }, []);

  return (
    <header className="header-container">
      <div className="logo">Bienvenidos</div>
      <nav className="nav-menu">
        <ul>
          <li>
            <Link to="/">Sobre Mi</Link>
          </li>
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
