import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import Table from 'react-bootstrap/Table';
import { Button, Col, Container, Row } from 'react-bootstrap';


export const Crud = () => {
  const citesRef = collection(db, 'cites')
  const [cites, setCites] = useState([])
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const getCites = async () => {
    const data = await getDocs(citesRef)
    setCites(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }

  const createCite = async () => {
    await addDoc(citesRef, { name, lastname, phone, date, time })
    getCites()
  }

  const deleteCite = async (id) => {
    const citeDoc = doc(db, 'cites', id)
    await deleteDoc(citeDoc)
    getCites()
  }

  useEffect(() => {
    getCites()
  }, [])

  return (
    <>
    <h1>Reserva tu cita</h1>
      <Container>
        <Row>
          <Col>
            <input
              type='string'
              placeholder='Nombre'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type='string'
              placeholder='Apellido'
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </Col>
          <Col>
          <input
              type='string'
              placeholder='Teléfono'
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              type='string'
              placeholder='Fecha'
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Col>
          <Col>
          <input
              type='string'
              placeholder='Hora'
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />

          </Col>
          <Button onClick={createCite} vatiant='success'>Reservar hora</Button>

        </Row>
      </Container>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {
            cites.map(cites => (
              <tr key={cites.id}>
                <td>{cites.name}</td>
                <td>{cites.lastname}</td>
                <td>{cites.phone}</td>
                <td>{cites.date}</td>
                <td>{cites.time}</td>
                <td>
                  <Button onClick={() => { deleteCite(cites.id) }} variant='danger'>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}
