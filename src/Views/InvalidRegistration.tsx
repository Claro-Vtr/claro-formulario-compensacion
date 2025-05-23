import Img from "../assets/img/frown.png";

const InvalidRegistration = ({
  mensaje,
  onRetry,
}: {
  mensaje: string;
  onRetry: () => void;
}) => {
  return (
    <div className="w-full mt-8 mb-8 p-6 border rounded-xl text-center">
      <img src={Img} alt="Registro Fallido" className="mx-auto" />
      {/* <h1 className="mt-6 font-medium text-2xl text-[#AF272F]">Hubo un error al insertar los datos.</h1> */}
      <h1 className="mt-6 font-medium text-2xl text-[#AF272F]">{mensaje}</h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          className="red-button"
          type="button"
          onClick={onRetry}
        >
          Reintentar
        </button>
        <button
          className="red-button"
          type="button"
          onClick={() =>
            (window.location.href = "https://www.clarochile.cl/personas/")
          }
        >
          Volver a Claro.cl
        </button>
      </div>
    </div>
  );
};

export default InvalidRegistration;
