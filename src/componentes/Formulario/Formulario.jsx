import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo/index";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const {registrarColaborador, crearEquipo}= props

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log("manejar el envio");
    let datosAEnviar ={
        nombre: nombre,
        puesto : puesto,
        foto: foto,
        equipo
    }
    registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo =(e)=>{
    e.preventDefault();
    crearEquipo({titulo,colorPrimario:color})
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required={true}
          value={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          value={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          value={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones value={equipo}
          actualizarEquipo={actualizarEquipo} 
          equipos = {props.equipos}
        />

        {/* <Boton titulo="Crear"/> */}
        <Boton>Crear</Boton>
        {/* <Boton>Crear
                <img src="/favicon.png" alt="icono"/>
            </Boton> */}
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar título"
          required={true}
          value={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar el color en Hex"
          required
          value={color}
          actualizarValor={actualizarColor}
          type= "color"
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
