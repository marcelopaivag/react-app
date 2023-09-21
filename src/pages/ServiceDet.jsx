import React from "react"
import { useParams } from "react-router-dom"
import data from '../data.json'

export const ServiceDet = () => {
    const { sku } = useParams()
    const serviceSelected = data.services.filter(service => service.sku === sku)
    console.log(serviceSelected)
  return (
    <>
    <h1>{serviceSelected[0].name}</h1>
    <h1>{serviceSelected[0].image}</h1>
    <h2>{serviceSelected[0].price}</h2>
    <h3>{serviceSelected[0].description}</h3>
    </>
  )
}
