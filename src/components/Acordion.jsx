import Accordion from 'react-bootstrap/Accordion';

export const Acordion = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Beneficios del Ejercicio terapéutico para tu recuperación</Accordion.Header>
        <Accordion.Body>El ejercicio es un subconjunto de la actividad física y se define como la actividad estructurada con el objetivo de mejorar el rendimiento físico y/o la salud.
        En las últimas dos décadas se ha acumulado un conocimiento considerable sobre la importancia del ejercicio como tratamiento de primera línea de varias enfermedades.</Accordion.Body>
        </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Efectos positivos de la Tecarterapia</Accordion.Header>
        <Accordion.Body>Es un tratamiento no quirúrgico, seguro y no invasivo que se utiliza para el tratamiento de enfermedades de los huesos, articulaciones y tejidos blandos. Combina la terapia manual con la aplicación de corrientes eléctricas (radiofrecuencia), que elevan la temperatura en una zona específica del cuerpo, con fines preventivos, curativos y analgésicos. Su aplicación produce relajación muscular, regeneración de tejidos, reducción del edema y alivio del dolor.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
