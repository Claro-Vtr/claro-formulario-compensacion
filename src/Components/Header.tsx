const Header = () => {
    return ( 
        <>
            <div id="container-header" className="container-compensacion">
                <h1 className="title">Formulario de Devolución</h1>
                <div className="container-questions">                    
                    <p>Para continuar con tu solicitud de devolución de dinero, necesitamos que completes este formulario con tus datos bancarios personales y válidos.</p>
                    <span className="header-title">Requisitos importantes</span>
                    <ul>    
                        <li>• Los datos deben pertenecer al titular del servicio. </li>
                        <li>• La cuenta debe estar asociada al RUT del titular.</li>
                        <li>• Solo se aceptan cuentas vigentes y activas. </li>
                        <li>• Asegúrate de que la información ingresada sea correcta y completa.</li>
                    </ul>
                    <span className="header-title">¿Cómo completar el formulario?</span>
                   <ul>    
                        <li>1. Ingresa tu RUT (sin puntos, con guion). </li>
                        <li>2. Se desplegarán los campos para completar tus datos de contacto e información bancaria.</li>
                        <li>3. Revisa todo antes de enviar.</li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default Header;