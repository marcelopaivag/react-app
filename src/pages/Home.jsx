import React from 'react'
import { Jumbotron } from '../components/Jumbotron'
import { ServicesComp } from '../components/ServicesComp'
import { Acordion } from '../components/Acordion'

export const Home = () => {
  return (
    <>
    <Jumbotron />
    <ServicesComp />
    <Acordion />
    </>
  )
}