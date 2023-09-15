import React from 'react'
import { useState } from 'react'
                        //El listado completo de peliculas
export const Buscador = ({listadoState, setListadoState}) => {
    const [busqueda, setBusqueda] = useState('')
    const [noEncontrado, setNoEncontrado] = useState(false)

    const buscarPeli =(e)=>{

        //Crear Estado y actualizarlo
        setBusqueda(e.target.value)

        //Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli =>{
            // tolowercase es para convertir en minuscula lo que introducimos en el buscador
            //includes, sirve para verificar si lo que buscamos coincide con peli.titulo 
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })
        //Si busqueda.length <= 1 muestra todas las pelis, o si es <= 0 muestra también todas las pelis
        //son 2 candicionales en uno, 
        //compara 2 sucesos para que siempre hayan pelis que mostrar hasta que comience a filtrar  
        if(busqueda.length <= 1 || pelis_encontradas <= 0){
            pelis_encontradas = JSON.parse(localStorage.getItem('pelis'))
            setNoEncontrado(true)
        }else{
            setNoEncontrado(false)
        }

        
        
        //Actualizar estado del listado principal con lo que he logrado filtrar
        setListadoState(pelis_encontradas)
    }
    return (
    <>
        <div className="search">
            <h3 className="title">Buscador: {busqueda}</h3>

            {(noEncontrado === true && busqueda.length > 1 )&& (
                <span className='no-encontrado'>No se ha encontrado ninguna Coincidencia</span>
            )}
            
            <input type="text" 
                    name="busqueda" 
                    autoComplete='off'
                    // id="search_field"
                    value={busqueda}
                    onChange={buscarPeli}
                    />

            <button id="search">Buscar</button>
        </div>

    </>
)
}
