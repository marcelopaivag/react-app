import React from 'react'

function Service(props) {
    return (   
        <div className='service'>
            <h3>Nombre: {props.name}</h3>
            <h5>Valor: {props.value}</h5>
            <p>Descripción: {props.description}</p>
        </div>
    )
}

export const PropComp = () => {
  return (
    <>
    <div>
      <h1>Servicios con Props</h1>
      <Service name="Kinesiología" value="$45.000" description="Manejo de afecciones musculoesqueléticas, es decir, que afectan a músculos, huesos, articulaciones y nervios" />
      <Service name="Osteopatía" value="$48.000" description="El cuerpo dispone de todos los mecanismos necesarios para la autocuración, solo hay que ayudarle a restablecer la función normal." />
      <Service name="Telerehabilitación" value="$25.000" description="Rama de la telemedicina enfocada principalmente en la rehabilitación, con un enfoque biopsicosocial, de los usuarios y/o comunidades." />
    </div>
    </>
  )
}
