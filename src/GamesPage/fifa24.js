import HeaderComponent from "../Components/headerComponent";
import styles from "./Gamepage.module.css"
import React from "react";
import { Jogos } from "../Pages/Loja";

function Fifa24(){
    return(
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
            <h2 className={styles.gameName}>Ea Sports FC 24</h2>
            <img src="/images/fifa24/1.jpg" alt="Imagem do jogo" className={styles.mainImg}id="img"></img>
            <img src="/images/fifa24.jpg" alt="Imagem do jogo" className={styles.cover}id="img"></img>
            <p className={styles.gameDescription}>
                O EA SPORTS FC™ 24 traz o Jogo de Todo Mundo: a experiência mais realista de futebol com o HyperMotionV,
                 PlayStyles otimizada pela Opta, e uma Frostbite™ Engine melhorada.
            </p>
            <div className={styles.downloadArea}>
                <p>Comprar {Jogos.fifa24.nome} {Jogos.fifa24.preco}</p>
                <input type="button" className={styles.downloadButton} value="Comprar"/>
            </div>
        </div>
        </>
    )
}


export default Fifa24