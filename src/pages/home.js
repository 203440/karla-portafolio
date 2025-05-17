import "../style.css"

export default function Home() {
  return (
    <div>

      <main>
        <section id="sobre-mi">
          <h2>Sobre Mi</h2>
          <div className="sobre-mi-contenido">
            <div className="perfil-bio">
              <div className="div-perfil">
                <img
                  src="https://i.pinimg.com/736x/07/74/9f/07749fcaf2ace35c0a720e31cc2ba544.jpg"
                  alt="perfil"
                  className="perfil"
                />
              </div>
              <div className="bio-texto">
                <p>
                  Soy un Desarrollador fullstack jr enfocado en crear y aprender nuevas cosas. Tengo conocimientos
                  construyendo aplicaciones web con Javascript, React, Vue, Django solo por mencionar las más destacadas
                  en mi perfil. Tengo la experiencia de trabajar en equipos para la colaboración de creación y
                  despliegue de proyectos. Estoy abierto a nuevas oportunidades donde pueda seguir aprendiendo y aportar
                  mis conocimientos en desarrollo web moderno.
                </p>
              </div>
            </div>

            <div className="tecnologias-container">
              <h3>Lenguajes y Frameworks mas usados</h3>
              <div className="tecnologias-grid">
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/84/d4/1f/84d41f2e8078d20a79d9e5d69fa28644.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>React js</h4>
                </div>

                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/c4/54/7a/c4547a2760dda54e23f0f5d1714288fd.jpg"
                    alt="logo vue"
                    className="logoT"
                  />
                  <h4>Vue js</h4>
                </div>

                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/c3/27/19/c327197fee8696bcadd92b3f32f6c218.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Angular</h4>
                </div>
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/85/a4/f1/85a4f163f5a4e538c07e852f83a43168.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Quasar</h4>
                </div>
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/81/14/21/811421bf95c2d6506d3660a6814b71d2.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Django</h4>
                </div>


                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/ed/94/e3/ed94e3e6fae5dd09cd8f7652f4a01c3d.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Laravel</h4>
                </div>
    
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/0d/76/7c/0d767c96c863420533d0bae226661170.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Javascript</h4>
                </div>
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/0a/40/81/0a4081f5a2503da9169b486618cc615c.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Java</h4>
                </div>
                <div className="cont-tec">
                  <img
                    src="https://i.pinimg.com/736x/85/6e/45/856e4546b8c202dda03e97771f76f902.jpg"
                    alt="logo react"
                    className="logoT"
                  />
                  <h4>Python</h4>
                </div>

              </div>
            </div>

            <div className="tecnologias-container">
            <h3>Herramientas</h3>
                <div className="tecnologias-grid">
                    <div className="cont-tec">
                        <img
                            src="https://i.pinimg.com/736x/01/e6/21/01e621158668a4b8b7c92f1d1671bd43.jpg"
                            alt="logo react"
                            className="logoT"
                        />
                        <h4>Visual Studio Code</h4>
                    </div>
                    <div className="cont-tec">
                        <img
                            src="https://i.pinimg.com/736x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg"
                            alt="logo react"
                            className="logoT"
                        />
                        <h4>GitHub</h4>
                    </div>
                    <div className="cont-tec">
                        <img
                            src="https://i.pinimg.com/736x/06/86/c0/0686c0c85407548ea5bd737a572974b6.jpg"
                            alt="logo react"
                            className="logoT"
                        />
                        <h4>PostgreSQL</h4>
                    </div>
                    <div className="cont-tec">
                        <img
                            src="https://i.pinimg.com/736x/17/06/c9/1706c9f16bd08eb5e03f1df3e0a94a1c.jpg"
                            alt="logo react"
                            className="logoT"
                        />
                        <h4>Figma</h4>
                    </div>
                    <div className="cont-tec">
                        <img
                            src="https://i.pinimg.com/736x/c1/05/7a/c1057a6fd68743e82127e068c1d58904.jpg"
                            alt="logo react"
                            className="logoT"
                        />
                        <h4>Trello</h4>
                    </div>
                </div>
            
            </div>
          </div>

        </section>

        <section id="proyectos" style={{ padding: "4rem", minHeight: "100vh" }}>
          <h2>Proyectos</h2>
          <p>Mis proyectos...</p>
        </section>

        <section id="contacto" style={{ padding: "4rem", minHeight: "100vh" }}>
          <h2>Contacto</h2>
          <p>Información de contacto...</p>
        </section>
      </main>
    </div>
  )
}