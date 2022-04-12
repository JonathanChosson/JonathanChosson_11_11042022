import React from 'react'
import Header from '../Components/Header'
import fondHome from '../Assets/fondHome.png'
import '../Styles/Pages/Home.css'
import ListLocation from '../Components/ListLocation'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home__divImg">
                <img
                    className="home__divImg__img"
                    src={fondHome}
                    alt="Chez vous, partout et ailleurs"
                />
                <h1 className="home__divImg__h1">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
            <ListLocation />
        </div>
    )
}

export default Home
