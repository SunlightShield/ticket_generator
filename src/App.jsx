import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [nombreTicket, SetnombreTicket] = useState("")
  const [descripcionTicket, SetdescripcionTicket] = useState("")
  const [importanciaTicket, SetimportanciaTicket] = useState("")

  const capturarNombre = (event) =>{
    SetnombreTicket(event.target.value);
  };

  const capturarDesc = (event) =>{
    SetdescripcionTicket(event.target.value);
  };

  const capturarImportancia = (event) =>{
    SetimportanciaTicket(event.target.value);
  };

  const Enviar = () => {
    
    console.log("nombre del ticket:" + " " + nombreTicket);
    console.log("descipcion del ticket" + " " + descripcionTicket)
    console.log("importancia del ticket" + " " + importanciaTicket)


    
    navigate("/final");
  };

  return (
    <>
      <div><h3>Por favor ingrese su ticket</h3></div>

      <div className="card">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nombre del ticket
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Error 01"
            onChange={capturarNombre}
          />
        </div>



        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
            Importancia del Ticket
          </label>
        <select class="form-select" aria-label="Default select example" onChange={capturarImportancia}>
          <option selected>Seleccione</option>
          <option value="puede_esperar_un_par_de_semanas">1</option>
          <option value="puede_esperar_un_par_de_dias">2</option>
          <option value="por_favor_verlo_hoy">3</option>
          <option value="por_favor_verlo_ahora">4</option>
          <option value="we_are_fucked">5</option>
        </select>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Descripcion del ticket
          </label>
          <textarea
            class="form-control"
            id="El error ocurrio en .... "
            rows="3"
            onChange={capturarDesc}
          ></textarea>
        </div>

        <button type="button" class="btn btn-dark" onClick={() => Enviar()}>Enviar</button>
      </div>
    </>
  );
}

export default App;
