import "../style.css"

export default function Contacto() {
    return (
      <section id="contacto">
        <div className="contacto-container">
          <h2>Contacto</h2>
          <p className="contacto-intro">¿Interesado en trabajar juntos? Contáctame por cualquiera de estos medios.</p>
  
          <div className="contacto-grid">
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3>Teléfono</h3>
              <a href="tel:9671394604" className="contacto-info">
                9671394604
              </a>
              <p className="contacto-desc">Disponible de lunes a viernes de 9am a 6pm</p>
            </div>
  
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <a href="mailto:karlamaricruz2904@gmail.com" className="contacto-info">
                karlamaricruz2904@gmail.com
              </a>
              <p className="contacto-desc">Respondo en menos de 24 horas</p>
            </div>
            <div className="contacto-card">
              <div className="contacto-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/karla-maricruz-ruiz-diaz-ab310b220/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-info"
              >
                Karla Maricruz Ruiz Díaz
              </a>
              <p className="contacto-desc">Conéctate conmigo profesionalmente</p>
            </div>
          </div>
  
          <div className="contacto-cta">
            <h3>¿Listo para trabajar juntos?</h3>
            <a href="mailto:karlamaricruz2904@gmail.com" className="contacto-button">
              Envíame un mensaje
            </a>
          </div>
        </div>
      </section>
    )
  }
  