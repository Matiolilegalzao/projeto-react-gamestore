import { Link } from 'react-router-dom'
import styles from './main.module.css'
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function MainHomeComponent() {
    return (
        <>
        <div className={styles.main}>
            <p>Popular nesta semana</p>
            <div className={styles.container}>
                <div className={styles.item}>
                    <Link to="/GamesPage">
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

export default MainHomeComponent