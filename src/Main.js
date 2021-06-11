import { useState } from "react";

function Main(props) {
    const catalogo= props.muelle.barcos.map((barco, index)=>{
        return (
            <Tarjeta 
            index={index}
            nombre={barco.nombre}
            eslora={barco.eslora}
            tripulantes={barco.tripulantes}
            />
        );

    })

    function Tarjeta(props){
        //esto solo afecta a la tarjeta a la que se refiere
        let [tripulantes, setTripulantes]=useState(props.tripulantes)//ponemos props.tripulantes porque es de donde partimos y ese pasa a ser el contenido de tripulantes

        return(
            <>
            <div key={props.index}>
            <div className="container">
            <h1>{props.nombre}</h1>
            <h2>Eslora: {props.eslora}</h2>
            <p>Tripulantes: {tripulantes}</p> 
            <button onClick={()=>{setTripulantes(tripulantes +1)}}>Click</button>               


            </div>
            </div>
            </>
        )
    }

    return (
        <>
        <div key="biblioteca" className="catalogo">{catalogo}
        </div>
        </>
    );
    
  }
  
  export default Main;