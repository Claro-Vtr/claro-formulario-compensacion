import { useState } from "react";

interface InfoAccountProps {
  rut: string;
}

const InfoAccount: React.FC<InfoAccountProps> = ({ rut }) => {
  const [formData, setFormData] = useState({
    rut: rut,
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
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto p-6 border rounded-xl grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
    >
      <div className="w-full">
        <label className="block font-semibold mb-1">Rut Titular</label>
        <input
          type="text"
          name="rut"
          value={rut}
          disabled
          className="w-full bg-gray-200 rounded-xl px-4 py-2"
        />
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1">Banco</label>
        <select
          name="banco"
          value={formData.banco}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        >
          <option value="">Selecciona banco</option>
          <option value="banco1">Banco BCI/Mach</option>
          <option value="banco1">Banco BBVA</option>
          <option value="banco1">Banco Bice</option>
          <option value="banco1">Banco Consorcio</option>
          <option value="banco1">Banco de Chile/Edwards/Credichile</option>
          <option value="banco1">Banco del Desarrollo</option>
          <option value="banco1">Banco Estado</option>
          <option value="banco1">Banco Falabella</option>
          <option value="banco1">Banco Internacional</option>
          <option value="banco1">Banco Itaú</option>
          <option value="banco1">Banco Paris</option>
          <option value="banco1">Banco Ripley</option>
          <option value="banco1">Banco Santander/Banefe</option>
          <option value="banco1">Banco Scotiabank</option>
          <option value="banco1">Banco Security</option>
          <option value="banco1">Citibank</option>
          <option value="banco1">Coopeuch/Dale</option>
          <option value="banco1">Copec Pay</option>
          <option value="banco1">Corpbanca</option>
          <option value="banco1">Global66</option>
          <option value="banco1">HBSC Bank</option>
          <option value="banco1">J.P. Morgan Chase Bank</option>
          <option value="banco1">La Polar Prepago</option>
          <option value="banco1">Mercado Pago</option>
          <option value="banco1">Prepago Los Heroes</option>
          <option value="banco1">TAPP Caja los Andes</option>
          <option value="banco1">TENPO Prepago</option>
        </select>
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1">Nombre Titular</label>
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
        <label className="block font-semibold mb-1">Tipo de Cuenta</label>
        <select
          name="tipoCuenta"
          value={formData.tipoCuenta}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        >
          <option value="">Selecciona tipo de cuenta corriente</option>
          <option value="corriente">Cuenta Corriente</option>
          <option value="vista">Cuenta Vista</option>
          <option value="ahorro">Cuenta de Ahorro</option>
        </select>
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1">
          Correo electrónico de contacto
        </label>
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
        <label className="block font-semibold mb-1">N° Cuenta bancaria</label>
        <input
          type="text"
          name="numeroCuenta"
          placeholder="Ingresa el número de la cuenta bancaria"
          value={formData.numeroCuenta}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
        <small className="text-gray-500 text-xs mt-1 block">
          *El número de cuenta bancaria debe estar asociada al RUT del titular
        </small>
      </div>

      <div className="w-full">
        <label className="block font-semibold mb-1">Teléfono de contacto</label>
        <input
          type="text"
          name="telefono"
          placeholder="987654321"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full border rounded-xl px-4 py-2"
        />
      </div>

      <div className="col-span-1 md:col-span-2 flex items-center gap-2">
        <input type="checkbox" name="politica" />
        <span>
          Acepto{" "}
          <a href="#" className="text-blue-600 underline">
            política de privacidad
          </a>
        </span>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center">
        <button
          type="submit"
          className="red-button hover:bg-[#DA291C] hover:text-white transition"
        >
          Enviar Solicitud
        </button>
      </div>
    </form>
  );
};

export default InfoAccount;
