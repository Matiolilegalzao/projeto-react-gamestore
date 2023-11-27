import HeaderComponent from "../Components/headerComponent";
import styles from "./Gamepage.module.css"
import React from "react";

function Re4Remake(){
    return(
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
            <h2 className={styles.gameName}>Resident Evil 4</h2>
            <img src="/images/resident-evil-4/1.jpg" alt="Imagem do jogo" className={styles.mainImg}id="img"></img>
        </div>
        </>
    )
}


export default Re4Remake