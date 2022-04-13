import React from 'react'
import '../Styles/Components/DropDown.css'
import chevronHaut from '../Assets/chevronHaut.png'
import chevronBas from '../Assets/chevronBas.png'

const DropDown = ({ title, content }) => {
    function handleClickToggle(e) {
        if (e.target.id === 'Ouvrir') {
            e.target.parentNode.nextSibling.classList.remove('invisible')
            e.target.setAttribute('src', chevronHaut)
            e.target.setAttribute('id', 'Fermer')
            e.target.setAttribute('alt', 'Fermer')
        } else if (e.target.id === 'Fermer') {
            e.target.parentNode.nextSibling.classList.add('invisible')
            e.target.setAttribute('src', chevronBas)
            e.target.setAttribute('id', 'Ouvrir')
            e.target.setAttribute('alt', 'Ouvrir')
        }
    }

    return (
        <div className="DropDown">
            <div className="DropDown__title">
                <p>{title}</p>
                <img
                    src={chevronBas}
                    alt="Ouvrir menu"
                    onClick={handleClickToggle}
                    id="Ouvrir"
                />
            </div>
            <div className="DropDown__content invisible">
                {typeof content == 'object' ? (
                    <u className="DropDown__content__ul">
                        {content.map((equipement, index) => (
                            <li
                                key={index}
                                className="DropDown__content__ul__li"
                            >
                                {equipement}
                            </li>
                        ))}
                    </u>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

export default DropDown
