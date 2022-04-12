import React from 'react'
import '../Styles/Components/ListLocation.css'
import LocationCard from './LocationCard'

const ListLocation = ({ listingLocation }) => {
    return (
        <div className="ListLocation">
            {listingLocation.map((locationDetail, index) => (
                <LocationCard key={index} locationDetail={locationDetail} />
            ))}
        </div>
    )
}

export default ListLocation
