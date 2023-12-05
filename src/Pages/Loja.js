import HeaderComponent from "../Components/headerComponent"
import React from "react"
import { Link } from 'react-router-dom'
import styles from "./Loja.module.css"


const Jogos = {
    re4: {
        id: 1,
        nome: 'Resident Evil 4 Remake',
        preco: 'R$200,00',
        capa: "/images/re4.jpg"
    },
    fifa24: {
        id: 2,
        nome: 'Ea Sports FC 24',
        preco: 'R$320,00',
        capa: "/images/fifa24.jpg"
    },
    streetfighter6: {
         id: 3,
        nome: 'Street Fighter 6',
        preco: 'R$249,90',
        capa: "/images/streetfighter6.jpg"
    },
    icarus: {
         id: 4,
        nome: 'Icarus',
        preco: 'R$101,99',
        capa: "/images/icarus.jpg"
    },
    battlefield2042: {
        id: 5,
        nome: 'Battlefield 2042',
        preco: '249,00',
        capa: "/images/battlefield.jpg"
    }
}

function LojaPage() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <h1 className={styles.lojaTitle}>Loja</h1>
        <div className={styles.mainContent}>
            <div className={styles.gamesGrid}>

                <div className={styles.item}>
                    <Link to="/loja/resident-evil-4-remake">
                        <img src="/images/re4.jpg" className={styles.item} alt="Resident Evil 4 Remake"></img>
                        
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to="/loja/ea-sports-fc-24">
                    <img src="/images/fifa24.jpg" className={styles.item} alt="Ea Sports FC 24"></img>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to="/loja/street-fighter-6">
                    <img src="/images/streetfighter6.jpg" className={styles.item} alt="Street Fighter 6"></img>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to="/loja/icarus">
                    <img src="/images/icarus.jpg" className={styles.item} alt="Icarus"></img>
                    </Link>
                </div> 
                <div className={styles.item}>
                    <Link to="/loja/battlefield-2042">
                    <img src="/images/battlefield.jpg" className={styles.item} alt="Battlefield 2042"></img>
                    </Link>
                </div>                      
            </div>
        </div>
        </>
    )
}
export default LojaPage;
export { Jogos }