import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import React from 'react';
import HeaderComponent from '../Components/headerComponent';
function Home() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.main}>
            <p className={styles.popular}>Popular nesta semana &#128185;</p>
            <div className={styles.container}>
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
            </div>
            <div className={styles.categoriasContainer}>
                <h2>Categorias</h2>
                <ul className={styles.categoriasList}>
                    <li className={styles.categoriasListItem}>Ação</li>
                    <li className={styles.categoriasListItem}>Terror</li>
                    <li className={styles.categoriasListItem}>Gratuito</li>
                    <li className={styles.categoriasListItem}>RPG</li>
                    <li className={styles.categoriasListItem}>Casual</li>
                </ul>
            </div>    
        </div>

        </>
    )
}

export default Home