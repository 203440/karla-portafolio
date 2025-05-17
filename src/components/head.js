import "../style.css"

export default function Head() {
  return (
    <header className="header-container">
      <div className="logo">Bienvenidos</div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#sobre-mi">Sobre Mi</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
