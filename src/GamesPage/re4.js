import HeaderComponent from "../Components/headerComponent";
import styles from "./Gamepage.module.css"
import React from "react";
import { Jogos } from "../Pages/Loja";

function Re4Remake(){
    return(
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
            <h2 className={styles.gameName}>Resident Evil 4</h2>
            <img src="/images/resident-evil-4/1.jpg" alt="Imagem do jogo" className={styles.mainImg}id="img"></img>
            <img src={Jogos.re4.capa} alt="Imagem do jogo" className={styles.cover}id="img"></img>
            <p className={styles.gameDescription}>
                Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City.
                Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila
                europeia isolada, onde há algo terrivelmente errado com os habitantes.
            </p>
            <div className={styles.downloadArea}>
                <p>Comprar {Jogos.re4.nome} {Jogos.re4.preco}</p>
                <input type="button" className={styles.downloadButton} value="Comprar"/>
            </div>
        </div>
        </>
    )
}


export default Re4Remake