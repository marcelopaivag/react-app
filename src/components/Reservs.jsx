import React from 'react'

export const Reservs = () => {
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState("");
    const [motivo, setMotivo] = useState("");

    const handleChangeFecha = (fecha) => {
        setFecha(fecha);
    };

    const handleChangeHora = (hora) => {
        setHora(hora);
    };

    const handleChangeMotivo = (motivo) => {
        setMotivo(motivo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar la reserva al servidor
    };
    return (
        <>
            <div>
                <h1>Agenda tu hora con nosotros</h1>
                <p>Reserva tu cita con un kinesiólogo experto en {especialidad}. Contamos con un equipo de profesionales capacitados para brindarte el mejor tratamiento.</p>

                <Calendar
                    value={fecha}
                    onChange={handleChangeFecha}
                    locale="es-ES"
                />

                <input
                    type="time"
                    placeholder="Hora"
                    value={hora}
                    onChange={handleChangeHora}
                />

                <textarea
                    placeholder="Motivo de la consulta"
                    value={motivo}
                    onChange={handleChangeMotivo}
                />

                <Button variant="primary" onClick={handleSubmit}>
                    Reservar
                </Button>
            </div>
        </>
    )
}
