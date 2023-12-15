import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import imagenReserva from '../assets/reserva.jpg'
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './Reservas.css'
import { Link } from 'react-router-dom'

export const Reservas = () => {

    const reservasCollectionRef = collection(db, 'reservas')

    const [fecha, setFecha] = useState('')
    const [hora, setHora] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')

    const sendAlert = () => {
        alert('Su reserva fue agendada exitosamente, espere el correo de confirmacion')
    }

    const createReserva = async () => {
        await addDoc(reservasCollectionRef, { fecha, hora, nombre, cantidad })

        setFecha('')
        setHora('')
        setNombre('')
        setCantidad('')

        sendAlert()

    }




    return (
        <>
            <div className='text-center'>
                <img className='imagenreserva' src={imagenReserva}></img>
            </div>
            <h2 className='text-center'>Esta mesa te esta esperando !!</h2>
            <h6 className='text-center p-1'>Completa todos tus datos para agendar tu reserva</h6>
            <div className='datepicker text-center pt-3'>
                <DatePicker
                    className='inputfecha'
                    selected={fecha}
                    placeholderText="Fecha"
                    onChange={(date) => setFecha(date)} />

                <input
                    type="list"
                    list='horas'
                    placeholder='Hora'
                    value={hora}
                    onChange={(event) => setHora(event.target.value)} />
                <datalist id='horas'>
                    <option value='18:00' />
                    <option value='19:00' />
                    <option value='20:00' />
                    <option value='21:00' />
                    <option value='22:00' />
                </datalist>

                <input
                    type="string"
                    placeholder='Nombre'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)} />

                <input
                    type="string"
                    placeholder='Cantidad de Personas'
                    value={cantidad}
                    onChange={(event) => setCantidad(event.target.value)} />

                <Button className='mt-4' onClick={createReserva} variant='secondary'>Reservar</Button>
            </div>
            <h5 className='text-center p-4'> No llegues tarde... </h5>
            <Link id='lista-interna' className='text-center text-secondary' to="/Proyecto-4/lista-reservas"><h6>Lista interna de Reservados</h6></Link>
        </>
    )
}
