import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


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
      <input
        type='string'
        placeholder='Name'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type='string'
        placeholder='Lastname'
        value={lastname}
        onChange={(event) => setLastname(event.target.value)}
      />
      <input
        type='string'
        placeholder='Phone'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />
      <input
        type='string'
        placeholder='Date'
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type='string'
        placeholder='Time'
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />

      <Button onClick={createCite} vatiant='success'>Agregar</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
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
                  <Button variant='warning'>Edit</Button>
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
