const Faqs = () => {
    return ( 
        <>
            <div id="container-faqs" className="container-compensacion">
                <h1 className="title">Preguntas Frecuentes</h1>
                <div className="container-questions">
                    <span className="faq-question">¿Cuándo recibirás la devolución?</span>
                    <p className="faq-answer">El proceso de validación y transferencia puede tomar hasta 5 días hábiles desde que recibimos y validamos correctamente tu formulario.</p>
                    <span className="faq-question">¿Qué pasa si ingresas mal los datos?</span>
                    <p className="faq-answer">Nos contactaremos contigo para corregirlos, lo que podría retrasar el proceso.</p>
                    <span className="faq-question">¿Puedo ingresar una cuenta de otra persona?</span>
                    <p className="faq-answer">No. Solo transferimos a cuentas que coincidan con el RUT del titular registrado.</p>
                    <span className="faq-question">¿Me confirmarán el pago?</span>
                    <p className="faq-answer">Sí, recibirás un correo electrónico cuando la transferencia haya sido realizada.</p>
                </div>
            </div>
        </> 
    );
}
 
export default Faqs;