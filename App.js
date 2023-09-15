import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear1 } from "./components/Crear1";
import { useState } from "react";




function App() {

    const [listadoState, setListadoState] = useState ([])

  return (
    
    <div className="layout">
        {/* <!-- cabecera --> */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1> Pelis PluX </h1>
            
            <div className="logo">
                <h1 className="plus"> X </h1>
            </div>
        </header>

        {/* <!-- Barra de navegación --> */}
        <nav className="nav">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Peliculas</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
        </nav>

        {/* <!-- Contenido principal --> */}
        <section className="content">
    {/* <!-- Aqui va el listado de peliculas --> */}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>

        </section>

        {/* <!-- Barra lateral --> */}
        <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

        <Crear1 setListadoState={setListadoState} />
        
        </aside>

        {/* <!-- Pie de Página --> */}
        <footer className="footer">
            &copy Pelis Plus - By-Helicex <a href="https://www.helicexworkweb.es/">helicexworkweb.es</a>
        </footer>
    </div>

  );
}

export default App;
