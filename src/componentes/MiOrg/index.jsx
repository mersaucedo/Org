import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado -hooks
    //useState()
    console.log(props)
    //const [nombreVariable, funcionActualiza]= useState(valorInicial)
    //const [nombre, actualizarNombre]= useState("Mercedes")

    // const [mostrar, actualizarMostrar]= useState(true)

    // const manejarClick = () => {
    //     console.log("hola")
    // }

  return (
    <section className="orgSection">
      <h3 className="title"> Mi Organización </h3>
      <img src="/img/boton.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
  );
};

export default MiOrg;