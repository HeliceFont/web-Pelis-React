import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {
    //mocido al componente padre para que actualice el estado automaticamente cuando creamos una peli
    //const [listadoState, setListadoState] = useState ([])
    

    const[editar, setEditar] = useState(0)

    useEffect(() =>{
    
        console.log("Componentes del listado de peliculas cargado!!")
        conseguirPeliculas();
    
    },[]);
    
    const conseguirPeliculas = () =>{
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        
        setListadoState(peliculas)

        return peliculas;
    }
    
    const borrarPeli = (id) =>{
        // Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();


        //filtrar esas peliculas para que elimine del array la que no quiero. 
        // comprueba si el id que recorremos si es el mismo que buscamos lo descarta/elimina  
        //parseInt parseamos para convertirlo en un numero entero 
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))
        

        //Actualizar estado del listado
        setListadoState(nuevo_array_pelis)

        //Actualizar los datos en el LocalStorage
        // Elimina del localStorage el objeto que estaba guardado con esa id
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis)) 

    }

    

return (
    <>
    {/* != si no es nulo ? imprime  */}
    {listadoState != null ?
        listadoState.map(peli => {
        return(
        // {/* <!-- Aqui van la peliculas --> */}
        <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>

            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
            <button className="borrar" onClick={() => borrarPeli(peli.id) }>Borrar</button>

            {/* aparece formulario de editar */}
            {editar === peli.id && (

                <Editar peli ={peli}
                conseguirPeliculas={conseguirPeliculas}
                setEditar={setEditar}
                setListadoState= {setListadoState}
                />

            )}

        </article>)
        })
        // : si no
        : <h2>No Hay peliculas que mostrar</h2>
    }
        
    </>
  )
}
