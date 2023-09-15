import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear1 = ({setListadoState}) => {
    const tituloComponent ="Añadir pelicula";
    const [ peliState, setPeliState] = useState({
        titulo: '',
        descripcion:''
    });

    const { titulo, descripcion} = peliState;

    const conseguirDatosForm = e =>{
        e.preventDefault();

        //conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;
        
        // Crear objeto de la pelicula a guardar
        let peli ={
            //para crear un id que no se repita usamos new date y get time
            id: new Date().getTime(),
            titulo,
            descripcion, 
            
        };

        //Guardar el estado
        setPeliState(peli);

        //Actualizar el estado del Listado principal
        setListadoState(elementos =>{
            return [...elementos, peli]
        })

        //Guardar en el almacenamiento local, 
        //las palabras entre comillas es el nombre con el que se almacena en el localstorage
        //consultar archivo helper donde creamos la función de guardar en Storage
        GuardarEnStorage( "pelis", peli);
        //GuardarEnStorage( "copia_datos", peli);

        
    }

    

    return (
    <>
        <div className="add">
                    <h3 className="title">{tituloComponent}</h3>
                    {/* si se cumplen las 2 condiciones muestra titulo*/}
                    <strong>
                        {(titulo && descripcion ) && "Has creado la pelicula: " + titulo}
                    </strong>

                    <form onSubmit={conseguirDatosForm}>
                        <input type="text" 
                                id="titulo" 
                                name='titulo'
                                placeholder="Titulo" 
                                />

                        <textarea 
                                id="descripcion" 
                                name='descripcion'
                                placeholder="Descripcion"></textarea>

                        <input type="submit" 
                                id="save" 
                                value="Guardar"/>
                        </form>
        </div>
    </>
)
}
