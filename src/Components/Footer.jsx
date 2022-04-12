import React from 'react'
import logoPng from '../Assets/logo.png'
import '../Styles/Components/Footer.css'
const Footer = () => {
    return (
        <div className="Footer">
            <p className="Footer__p">
                K<img src={logoPng} alt="Kasa" />
                sa
            </p>
            <p className="Footer__p--copyright">
                ©️ 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}

export default Footer
