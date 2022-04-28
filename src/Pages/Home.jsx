import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import '../Styles/Pages/Home.css'
import ListLocation from '../Components/ListLocation'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'

const Home = () => {
    const [listingLocation, setListingLocation] = useState([])

    useEffect(() => {
        fetch('./mock.JSON')
            .then((res) => res.json())
            .then((data) => setListingLocation(data))
            .catch((error) => console.log(error))
    }, [])
    return (
        <div className="home">
            <Header />
            <Banner parent="home" />
            <ListLocation listingLocation={listingLocation} />
            <Footer />
        </div>
    )
}

export default Home
