import perfil from './images/perfil.jpg';
import './styles/App.css';

function App() {
  
  return (
    <>
      
    <header className="header">
        <a href="#" className="logo">Portafolio DAW</a>

        <nav className="navbar">
            <a href="#bni" className="active">Bienvenida e Introducción</a>
            <a href="#weeks">Tabla de contenido</a>
            <a href="#">Información sobre mí</a>
            
        </nav>
    </header>

    <section className="home">
        <div id='bni' className="home-content">
            <h1>Hola, Bienvenidos</h1>
            <h3>Portafolio de Desarrollo de Aplicaciones Web</h3>
            <p>Hola!!! Soy Fernando, estudiante de la UNCP, en la carrera profesional 
                de Ingeniería de Sistemas, soy una persona aficionada por la tecnología,
                y por la ciberseguridad.
                Este portafolio esta destinado principalmente, al curso de Desarrollo de
                Aplicaciones Web.</p>

            <div className="btn-box">
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a> 
            </div>

        </div>
        <div className='photo'>
          <img className='photo-perfil' src={perfil} alt="foto" />
        </div>
    </section>

   
    </>
  )
}

export default App
