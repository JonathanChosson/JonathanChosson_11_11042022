import React, { useEffect, useState } from 'react'
import '../Styles/Components/Caroussel.css'
import chevronDroite from '../Assets/chevron-droite.png'
import chevronGauche from '../Assets/chevron-gauche.png'

const Caroussel = ({ detailLocation }) => {
    const [isPhoto, setIsPhoto] = useState(false)
    const [album, setAlbum] = useState([])

    useEffect(() => {
        setAlbum(detailLocation.pictures)
        if (detailLocation.pictures) {
            if (detailLocation.pictures.length > 0) {
                setIsPhoto(true)
            }
        }
    }, [detailLocation])

    function precedant() {
        let image = document.querySelector('.Caroussel__img')
        let index
        if (parseInt(image.id) === 0) {
            index = album.length - 1
        } else {
            index = parseInt(image.id) - 1
        }
        image.setAttribute('src', album[index])
        image.setAttribute('id', index)
    }

    function suivant() {
        let image = document.querySelector('.Caroussel__img')
        let index
        if (parseInt(image.id) === album.length - 1) {
            index = 0
        } else {
            index = parseInt(image.id) + 1
        }
        image.setAttribute('src', album[index])
        image.setAttribute('id', index)
    }

    return (
        <div className="Caroussel">
            <img
                className="Caroussel__img"
                src={detailLocation.cover}
                alt={detailLocation.title}
                id="0"
            />
            {isPhoto ? (
                <span className="Caroussel__span">
                    <img
                        src={chevronGauche}
                        alt="Précédant"
                        className="Caroussel__span__p"
                        onClick={precedant}
                    />
                    <img
                        src={chevronDroite}
                        alt="Précédant"
                        className="Caroussel__span__p"
                        onClick={suivant}
                    />
                </span>
            ) : (
                ''
            )}
        </div>
    )
}

export default Caroussel
