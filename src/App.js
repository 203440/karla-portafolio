"use client"

import { useEffect } from "react"
import Head from "./components/head"
import Home from "./pages/home"

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
    <div>
      <Head />
      <main>
        <Home></Home>
      </main>
    </div>
  )
}
