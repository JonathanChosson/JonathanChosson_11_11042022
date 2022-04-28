import React from 'react'
import fondHome from '../Assets/fondHome.png'
import bgApropos from '../Assets/bg-apropos.png'

const Banner = ({ parent }) => {
    return (
        <div>
            {parent === 'home' ? (
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
            ) : (
                <div className="About__divImg">
                    <img
                        className="About__divImg__img"
                        src={bgApropos}
                        alt="Chez vous, partout et ailleurs"
                    />
                    <span className="About__divImg__h1"></span>
                </div>
            )}
        </div>
    )
}

export default Banner
