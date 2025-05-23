import { useState } from "react";
import SuccessfulRegistration from "../Views/SuccessfulRegistration";
import InvalidRegistration from "../Views/InvalidRegistration";

interface InfoAccountProps {
  rut: string;
}

interface FormData {
  rut: string;
  nombre: string;
  correo: string;
  telefono: string;
  banco: string;
  tipoCuenta: string;
  numeroCuenta: string;
  politica: boolean;
}

const InfoAccount: React.FC<InfoAccountProps> = ({ rut }) => {
  const [isSuccessfulRegistration, setIsSuccessfulRegistration] =
    useState(false);
  const [isInvalidRegistration, setIsInvalidRegistration] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    rut,
    nombre: "",
    correo: "",
    telefono: "",
    banco: "",
    tipoCuenta: "",
    numeroCuenta: "",
    politica: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://migracion.clarochilepromociones.com/claro-formulario-compensacion/api/insertData.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rut: formData.rut,
            nombre: formData.nombre,
            correo: formData.correo,
            telefono: formData.telefono,
            banco: formData.banco,
            tipo_cuenta_cliente: formData.tipoCuenta,
            numero_cuenta_cliente: formData.numeroCuenta,
            acepta_politica: formData.politica ? 1 : 0,
          }),
        }
      );

      const data = await response.json();

      if (
        response.ok &&
        data.mensaje?.includes("Datos insertados correctamente")
      ) {
        console.log("✔️ Enviado con éxito:", data);
        setIsSuccessfulRegistration(true);
      } else {
        console.error("❌ Error al enviar:", data);
        setErrorMessage(data?.mensaje || "Error desconocido");
        setIsInvalidRegistration(true);
      }
    } catch (error) {
      console.error("❌ Error en fetch:", error);
      setErrorMessage("No se pudo conectar al servidor.");
      setIsInvalidRegistration(true);
    }
  };

  if (isSuccessfulRegistration) {
    return <SuccessfulRegistration />;
  }

  if (isInvalidRegistration) {
    return (
      <InvalidRegistration
        mensaje={errorMessage}
        onRetry={() => {
          setIsInvalidRegistration(false);
          setErrorMessage("");
        }}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 border rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
    >
      <div className="w-full">
        <label className="label-Info">Rut Titular</label>
        <input
          type="text"
          name="rut"
          value={rut}
          disabled
          className="w-full bg-gray-200 rounded-xl px-4 py-2"
        />
      </div>

      <div className="w-full">
        <label className="label-Info">Banco</label>
        <select
          name="banco"
          value={formData.banco}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        >
          <option value="">Selecciona banco</option>
          <option value="bci">Banco BCI / Mach</option>
          <option value="bbva">Banco BBVA</option>
          <option value="bice">Banco Bice</option>
          <option value="consorcio">Banco Consorcio</option>
          <option value="chile">Banco de Chile / Edwards / Credichile</option>
          <option value="desarrollo">Banco del Desarrollo</option>
          <option value="estado">Banco Estado</option>
          <option value="falabella">Banco Falabella</option>
          <option value="internacional">Banco Internacional</option>
          <option value="itau">Banco Itaú</option>
          <option value="paris">Banco Paris</option>
          <option value="ripley">Banco Ripley</option>
          <option value="santander">Banco Santander / Banefe</option>
          <option value="scotiabank">Banco Scotiabank</option>
          <option value="security">Banco Security</option>
          <option value="citibank">Citibank</option>
          <option value="coopeuch">Coopeuch / Dale</option>
          <option value="copecpay">Copec Pay</option>
          <option value="corpbanca">Corpbanca</option>
          <option value="global66">Global 66</option>
          <option value="hsbc">HSBC Bank</option>
          <option value="jpmorgan">J.P. Morgan Chase Bank</option>
          <option value="lapolar">La Polar Prepago</option>
          <option value="mercadopago">Mercado Pago</option>
          <option value="losheroes">Prepago Los Héroes</option>
          <option value="tapp">TAPP Caja Los Andes</option>
          <option value="tenpo">TENPO Prepago</option>
        </select>
      </div>

      <div className="w-full">
        <label className="label-Info">Nombre Titular</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <div className="w-full">
        <label className="label-Info">Tipo de Cuenta</label>
        <select
          name="tipoCuenta"
          value={formData.tipoCuenta}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        >
          <option value="">Selecciona tipo de cuenta</option>
          <option value="corriente">Cuenta Corriente</option>
          <option value="vista">Cuenta Vista</option>
          <option value="ahorro">Cuenta de Ahorro</option>
        </select>
      </div>

      <div className="w-full">
        <label className="label-Info">Correo electrónico de contacto</label>
        <input
          type="email"
          name="correo"
          placeholder="nombre@dominio.com"
          value={formData.correo}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <div className="w-full">
        <label className="label-Info">N° Cuenta bancaria</label>
        <input
          type="text"
          name="numeroCuenta"
          placeholder="Ingresa el número de la cuenta bancaria"
          value={formData.numeroCuenta}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
        <span className="text-gray-500 text-xs mt-1 block">
          *El número de cuenta bancaria debe estar asociado al RUT del titular
        </span>
      </div>

      <div className="w-full">
        <label className="label-Info">Teléfono de contacto</label>
        <input
          type="text"
          name="telefono"
          placeholder="987654321"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <div className="flex items-center gap-2 justify-start mt-10  ">
        <input
          type="checkbox"
          name="politica"
          checked={formData.politica}
          onChange={handleChange}
        />
        <span className="text-sm">
          <a
            href="https://www.clarochile.cl/portal/cl/recursos_contenido/pdf/1738265380882-politica-de-proteccion-de-datos-personalesclarovtr-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0097A9] underline"
          >
            Acepto política de privacidad
          </a>
        </span>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          disabled={!formData.politica}
          className={`red-button hover:bg-[#DA291C] hover:text-white transition ${
            !formData.politica ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Enviar Solicitud
        </button>
      </div>
    </form>
  );
};

export default InfoAccount;
