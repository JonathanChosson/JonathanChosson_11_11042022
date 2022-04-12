import React from 'react'
import '../Styles/Components/LocationCard.css'

const LocationCard = () => {
    return (
        <div className="LocationCard">
            <img
                src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
                className="LocationCard__img"
                alt=""
            />
            <span className="LocationCard__span">
                <h2 className="LocationCard__span__h2">Titre de la location</h2>
            </span>
        </div>
    )
}

export default LocationCard
