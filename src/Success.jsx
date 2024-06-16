import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Success() {
    const navigate = useNavigate();

    const Volver = () => {
    
        console.log("ok");
        navigate("/");
      };

  return (
    <>
      <div><h3>todo okay</h3></div>
      <button type="button" class="btn btn-dark" onClick={() => Volver()}>Volver</button>

    </>
  );
}

export default Success;
