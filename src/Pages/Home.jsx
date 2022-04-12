import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import fondHome from '../Assets/fondHome.png'
import '../Styles/Pages/Home.css'
import ListLocation from '../Components/ListLocation'
import Footer from '../Components/Footer'

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
            <div className="home__divImg">
                <img
                    className="home__divImg__img"
                    src={fondHome}
                    alt="Chez vous, partout et ailleurs"
                />
                <span className="home__divImg__h1">
                    <h1>Chez vous, partout et ailleurs</h1>
                </span>
            </div>
            <ListLocation listingLocation={listingLocation} />
            <Footer />
        </div>
    )
}

export default Home
