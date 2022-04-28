import React from 'react'
import '../Styles/Pages/About.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import DropDown from '../Components/DropDown'
import Banner from '../Components/Banner'

const About = () => {
    return (
        <div className="About">
            <Header />
            <Banner />
            <div className="About__content">
                <DropDown
                    title="Fiabilité"
                    content="Les annonces postées sur KAsa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
                    largeur="DropDown__100"
                />
                <DropDown
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    largeur="DropDown__100"
                />
                <DropDown
                    title="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    largeur="DropDown__100"
                />
                <DropDown
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    largeur="DropDown__100"
                />
            </div>

            <Footer />
        </div>
    )
}

export default About
