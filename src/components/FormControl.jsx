import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

export const FormControl = () => {
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
            <form>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type='string'
                        placeholder="Juan"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Nombre</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type='string'
                        placeholder="Pérez"
                        value={lastname}
                        onChange={(event) => setLastname(event.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Apellido</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type='string'
                        placeholder="+569 123 45 678"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Teléfono</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type='string'
                        placeholder="12/12/2012"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Fecha</label>
                </Form.Floating>

                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type='string'
                        placeholder="15:55"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Hora</label>
                </Form.Floating>

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
                                        <Button onClick={() => { deleteCite(cites.id) }} variant='danger'>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </form>


        </>
    )
}
