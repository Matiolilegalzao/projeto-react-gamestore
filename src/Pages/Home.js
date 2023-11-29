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
                    <img src="/images/fifa24.jpg" className={styles.item} alt="Ea Sports FC 24"></img>
                </div>
                <div className={styles.item}>
                    <img src="/images/streetfighter6.jpg" className={styles.item} alt="Street Fighter 6"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home