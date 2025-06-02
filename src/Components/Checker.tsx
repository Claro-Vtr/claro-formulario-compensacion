import React, { useState } from "react";
import InfoAccount from "./InfoAccount";

const Checker = () => {
  const [rutInput, setRutInput] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const FormatID = (rut: string): string => {
    const cleanRut = rut.replace(/[^0-9kK]/g, "").toUpperCase();

    if (cleanRut.length <= 1) return cleanRut;

    const body = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1);

    let bodyFormateado = "";
    let i = 0;

    for (let j = body.length - 1; j >= 0; j--) {
      bodyFormateado = body[j] + bodyFormateado;
      i++;
      if (i % 3 === 0 && j !== 0) {
        bodyFormateado = "." + bodyFormateado;
      }
    }

    return `${bodyFormateado}-${dv}`;
  };

  const validateChileanId = (FormattedId: string): boolean => {
    const rut = FormattedId.replace(/\./g, "").replace(/-/g, "").toUpperCase();
    if (!rut || rut.length < 2) return false;

    const body = rut.slice(0, -1);
    const dv = rut.slice(-1);

    let suma = 0;
    let multiplo = 2;

    for (let i = body.length - 1; i >= 0; i--) {
      suma += parseInt(body.charAt(i)) * multiplo;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    const dvEsperado = 11 - (suma % 11);
    let dvCalculado = "";

    if (dvEsperado === 11) dvCalculado = "0";
    else if (dvEsperado === 10) dvCalculado = "K";
    else dvCalculado = dvEsperado.toString();

    return dv === dvCalculado;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9kK]/g, "").toUpperCase();

    if (value.length > 9) return;

    const FormattedId = FormatID(value);
    setRutInput(FormattedId);
    setErrorMessage(""); 

    if (mostrarFormulario && !validateChileanId(FormattedId)) {
      setMostrarFormulario(false);
    }
  };

  const handleClick = () => {
    if (rutInput.trim() === "") {
      setErrorMessage("Por favor ingresa un RUT.");
      setMostrarFormulario(false);
      return;
    }

    if (!validateChileanId(rutInput)) {
      setErrorMessage("RUT inválido. Verifica el dígito verificador.");
      setMostrarFormulario(false);
      return;
    }

    console.log("RUT válido:", rutInput);
    setErrorMessage("");
    setMostrarFormulario(true);
  };

  return (
    <div className="container-compensacion">
      <div className="container-checker flex flex-col sm:flex-row gap-4">
        <input
          className="input-checker"
          onChange={handleChange}
          type="text"
          value={rutInput}
          maxLength={12}
          placeholder="Ingrese el RUT del titular"
        />
        <button className="red-button" onClick={handleClick}>
          Continuar
        </button>
      </div>

      <div className="container-error  ">
        {/* Mensaje de error */}
        {errorMessage && (
          <p className="text-red-600 text-sm  left-0">{errorMessage}</p>
        )}
      </div>

      {mostrarFormulario && <InfoAccount rut={rutInput} />}
    </div>
  );
};

export default Checker;
