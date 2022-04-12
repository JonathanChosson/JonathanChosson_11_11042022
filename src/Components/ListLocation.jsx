import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Components/ListLocation.css'
import LocationCard from './LocationCard'

const ListLocation = ({ listingLocation }) => {
    return (
        <div className="ListLocation">
            {listingLocation.map((locationDetail, index) => (
                <Link
                    key={index}
                    className="ListLocation__a"
                    to={`/details/${locationDetail.id}`}
                >
                    <LocationCard key={index} locationDetail={locationDetail} />
                </Link>
            ))}
        </div>
    )
}

export default ListLocation
