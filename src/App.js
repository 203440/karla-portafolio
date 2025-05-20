"use client"

import { useEffect } from "react"
import Head from "./components/head"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SobreMi from './components/sobre-mi';
import Proyectos from './components/proyectos';
import Contacto from './components/contacto';

export default function App() {
  // Función para manejar el menú móvil
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        navMenu.classList.toggle("active")
      })
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener("click", () => {})
      }
    }
  }, [])

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
