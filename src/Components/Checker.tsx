import React, { useState } from "react";
import InfoAccount from "./InfoAccount";



const Checker = () => {
  const [rut, setRut] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRut(e.target.value);
  };

  const handleClick = () => {
    console.log("RUT ingresado:", rut);
  };

  return (
    <div className="container ">
      <div className="container-checker flex flex-row flex-col sm:flex-row gap-4">
        <input
          className="input-checker"
          onChange={handleChange}
          type="text"
          placeholder="Ingrese el RUT del titular"
        />
        <button className="red-button" onClick={handleClick}>Continuar</button>
      </div>
        <InfoAccount rut={rut}/>
    </div>
  );
};

export default Checker;
