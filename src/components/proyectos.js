import "../style.css"
import Kesha from "../img/Kesha.png"
import Pets from "../img/Pets.png"
import WebCraft from "../img/WebCraft.png"
import Tienda from "../img/Tienda.png"
import Datos from "../img/Datos.png"
import ID from "../img/idmty.png"
import Monterrey from "../img/monterrey.png"
import Acceso from "../img/acceso.png"
export default function Proyectos() {
  return (
    <section id="proyectos">
      <div className="proyectos-container">
        <h2>Proyectos</h2>
        <div className="bio-texto proyectos-intro">
          <p>Se menciona algunos de los proyectos en donde se ha trabajado y aportado en proyectos laborales.</p>
        </div>

        <div className="proyectos-categorias">
          <div className="categoria-proyectos">
            <div className="categoria-header">
              <h3>Designer</h3>
              <div className="categoria-linea"></div>
            </div>
            <p className="categoria-descripcion">
              Proyectos de diseño UI/UX donde he creado interfaces modernas y experiencias de usuario intuitivas,
              utilizando herramientas como Figma.
            </p>
            <div className="proyectos-grid">
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Kesha}
                    alt="Proyecto de diseño 1"
                  />
                  <div className="proyecto-overlay">
                    <h4>App Móvil Kesha</h4>
                    <p>Interfaz de un catalogo, proyecto escolar</p>
                    <a href="https://www.figma.com/design/2TKAeStSRTwBUcE4ApG9DQ/Proyecto?node-id=0-1&p=f&t=Mhvc2Elre0bDszFm-0" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={WebCraft}
                    alt="Proyecto de diseño 2"
                  />
                  <div className="proyecto-overlay">
                    <h4>App web WebCraft</h4>
                    <p>Diseño de gestion de apps y paginas, proyecto de practicas profesionales</p>
                    <a href="https://www.figma.com/design/zf76Ro48GkHbYKNg0P7dzd/WebCraft-Metricas-Proyecto-Estadia?node-id=0-1&p=f&t=PDkYn9x9RtOpMSlm-0" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Pets}
                    alt="Proyecto de diseño 3"
                  />
                  <div className="proyecto-overlay">
                    <h4>App Movil Pets</h4>
                    <p>App de citas de veterinaria, proyecto personal</p>
                    <a href="https://www.figma.com/design/Hkxr4ZqhxVfVQx48fWb0hk/Untitled?node-id=0-1&p=f&t=XqrsyarMJiaPRlU2-0" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Tienda}
                    alt="Proyecto de diseño 4"
                  />
                  <div className="proyecto-overlay">
                    <h4>Tienda Online</h4>
                    <p>Pagina de una tienda de ropa, practicas escolares</p>
                    <a href="https://www.figma.com/design/G3TBz19EJie1B6yPqFGjYA/Ventas-Prueba?node-id=0-1&p=f&t=0PH9insD77HG80xp-0" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Datos}
                    alt="Proyecto de diseño 5"
                  />
                  <div className="proyecto-overlay">
                    <h4>Datos Mty</h4>
                    <p>Pagina para el gobierno de monterrey</p>
                    <a href="#" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="categoria-proyectos">
            <div className="categoria-header">
              <h3>Frontend y Backend</h3>
              <div className="categoria-linea"></div>
            </div>
            <p className="categoria-descripcion">
              Aplicaciones web completas desarrolladas con tecnologías modernas como React, Vue, Django, Quasar
              implementando tanto la interfaz de usuario como la lógica del servidor.
            </p>
            <div className="proyectos-grid">
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Monterrey}
                    alt="Proyecto fullstack 1"
                  />
                  <div className="proyecto-overlay">
                    <h4>CMS Monterrey</h4>
                    <p>Sistema de gestión de paginas de monterrey usando wagtail, django, quasar</p>
                    <a href="https://www.monterrey.gob.mx/" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={ID}
                    alt="Proyecto fullstack 2"
                  />
                  <div className="proyecto-overlay">
                    <h4>Id Monterrey</h4>
                    <p>Sistema de gestions de usuarios de habitantes de monterrey para el pago de servicios como el predial</p>
                    <a href="https://id.monterrey.gob.mx/" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src={Acceso}
                    alt="Proyecto fullstack 3"
                  />
                  <div className="proyecto-overlay">
                    <h4>Acceso Joven</h4>
                    <p>Pagina para dedicada a jovenes para obtener ciertos servicos de Monterrey</p>
                    <a href="https://accesojoven.monterrey.gob.mx/servicios" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>

              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <img
                    src="https://i.pinimg.com/736x/ed/94/e3/ed94e3e6fae5dd09cd8f7652f4a01c3d.jpg"
                    alt="Proyecto fullstack 4"
                  />
                  <div className="proyecto-overlay">
                    <h4>E-commerce</h4>
                    <p>Tienda online completa con Laravel y React</p>
                    <a href="#" className="proyecto-btn">
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
