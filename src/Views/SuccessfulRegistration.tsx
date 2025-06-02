import Img from "../assets/img/Frame.png";

const SuccessfulRegistration = () => {
  return (
    <div className="w-full mt-8 mb-8 p-6 border rounded-xl place-items-center ">
      <img src={Img} alt="Registro éxitoso" />
      <h1 className="mt-6 font-medium text-2xl">Hemos ingresado correctamente tus datos</h1>
      <button
        className="red-button mt-8 mb-4"
        type="button"
        onClick={() =>
          (window.location.href = "https://www.clarochile.cl/personas/")
        }
      >
        Volver a Clarochile.cl
      </button>
    </div>
  );
};

export default SuccessfulRegistration;
