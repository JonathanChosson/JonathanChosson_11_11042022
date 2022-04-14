import React from 'react'
import '../Styles/Pages/Error.css'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="Error">
            <Header />
            <div className="Error__content">
                <p className="Error__content__p--404">404</p>
                <p className="Error__content__p--Oups">
                    Oups! La page que vous demandez n'éxiste pas.
                </p>
                <Link className="Error__content__link" to={'./'}>
                    Retourner sur la page d'accueil
                </Link>
            </div>
        </div>
    )
}

export default Error
