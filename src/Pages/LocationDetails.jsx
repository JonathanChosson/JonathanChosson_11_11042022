import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../Components/Caroussel'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import '../Styles/Pages/LocationDetails.css'

const LocationDetails = () => {
    const { id } = useParams()

    const [detailLocation, setDetailLocation] = useState([])

    useEffect(() => {
        fetch('../mock.JSON')
            .then((res) => res.json())
            .then((data) =>
                setDetailLocation(
                    data.filter((location) => location.id === id)[0]
                )
            )
            .catch((error) => console.log(error))
    }, [id])

    return (
        <div className="LocationDetails">
            <Header />
            <Caroussel detailLocation={detailLocation} />
            <Footer />
        </div>
    )
}

export default LocationDetails
