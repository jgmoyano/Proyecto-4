import React from 'react'
import { Link } from 'react-router-dom'
import logoPequeño from '../assets/logopequeño.png'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div>
                <footer className='text-white py-2 bg-dark'>
                    <div className="container">
                        <nav className="row">
                            <Link to='Proyecto-4/' className='mb-3 col-12 col-md-3 d-flex align-items-center'>
                                <img src={logoPequeño} height='80' />
                            </Link>
                            <ul id='foot-dir' className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2'>PIZZERIA MILANO</li>
                                <li>+56 9 98554455 <br />Calle 5 Norte 3670, Talca <br />Region del Maule</li>
                            </ul>
                            <ul id='enlaces' className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2'>ENLACES</li>
                                <li>
                                    <Link to='Proyecto-4/' className='text-reset'>Home</Link>
                                </li>
                                <li>
                                    <Link to='Proyecto-4/menu' className='text-reset'>Menu</Link>
                                </li>
                                <li>
                                    <Link to='Proyecto-4/contacto' className='text-reset'>Contacto</Link>
                                </li>
                            </ul>
                            <ul className="col-12 col-md-3 list-unstyled">
                                <li className='font-weight-bold mb-2 text-center'>SIGUENOS</li>
                                <li className="d-flex justify-content-between pt-3" id='footer-rrss'>
                                    <i className="bi bi-facebook" />
                                    <i className="bi bi-instagram" />
                                    <i className="bi bi-twitter" />
                                    <i className="bi bi-youtube" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </footer>
            </div>
        </>
    )
}
