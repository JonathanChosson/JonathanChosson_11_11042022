import React from 'react'
import '../Styles/Components/LocationCard.css'

const LocationCard = ({ locationDetail }) => {
    return (
        <div className="LocationCard">
            <img
                src={locationDetail.cover}
                className="LocationCard__img"
                alt=""
            />
            <span className="LocationCard__span">
                <h2 className="LocationCard__span__h2">
                    {locationDetail.title}
                </h2>
            </span>
        </div>
    )
}

export default LocationCard
