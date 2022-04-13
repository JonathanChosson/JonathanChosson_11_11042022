import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../Components/Caroussel'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Tags from '../Components/Tags'
import DropDown from '../Components/DropDown'
import '../Styles/Pages/LocationDetails.css'
import etoilePleine from '../Assets/etoile-pleine.png'
import etoileVide from '../Assets/etoile-vide.png'

const LocationDetails = () => {
    const { id } = useParams()
    const range = [1, 2, 3, 4, 5]

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
            <div className="LocationDetails__info">
                <div className="LocationDetails__info__adress">
                    <p className="LocationDetails__info__adress--title">
                        {detailLocation.title}
                    </p>
                    <p className="LocationDetails__info__adress--city">
                        {detailLocation.location}
                    </p>
                    <Tags listTag={detailLocation.tags} />
                </div>
                {detailLocation.host ? (
                    <div className="LocationDetails__info__rating">
                        <div className="LocationDetails__info__rating--rate">
                            {range.map((rangeElement, index) =>
                                parseInt(detailLocation.rating) >=
                                rangeElement ? (
                                    <img
                                        className="LocationDetails__info__rating--rate__img"
                                        key={index}
                                        src={etoilePleine}
                                        alt="rating"
                                    />
                                ) : (
                                    <img
                                        className="LocationDetails__info__rating--rate__img"
                                        key={index}
                                        src={etoileVide}
                                        alt="rating"
                                    />
                                )
                            )}
                        </div>

                        <div className="LocationDetails__info__rating__host">
                            <p className="LocationDetails__info__rating__host__p">
                                {detailLocation.host.name}
                            </p>
                            <img
                                className="LocationDetails__info__rating__host__img"
                                src={detailLocation.host.picture}
                                alt={detailLocation.host.name}
                            />
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className="LocationDetails__content">
                <DropDown
                    title="Description"
                    content={detailLocation.description}
                />
                <DropDown
                    title="Equipements"
                    content={detailLocation.equipments}
                />
            </div>
            <Footer />
        </div>
    )
}

export default LocationDetails
// console.log(parseInt(detailLocation.rating))
