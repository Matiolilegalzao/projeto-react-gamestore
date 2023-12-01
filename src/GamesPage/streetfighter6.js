import HeaderComponent from "../Components/headerComponent";
import styles from "./Gamepage.module.css"
import React from "react";
import { Jogos } from "../Pages/Loja";
import { Link } from "react-router-dom";


let teste;
function StreetFighter6(){
    return(
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
            <h2 className={styles.gameName}>Resident Evil 4</h2>
            <img src="/images/streetfighter6/1.jpg" alt="Imagem do jogo" className={styles.mainImg}id="img"></img>
            <img src={Jogos.streetfighter6.capa} alt="Imagem do jogo" className={styles.cover}id="img"></img>
            <p className={styles.gameDescription}>
                Aí vem o mais novo desafiante da Capcom! Street Fighter™ 6 será lançado no mundo inteiro em 2 de junho de 2023 e 
                representa a próxima evolução da série Street Fighter™! Street Fighter 6 engloba três modos de jogo distintos, 
                incluindo World Tour, Fighting Ground e Battle Hub.
            </p>
            <div className={styles.downloadArea}>
                <p>Comprar {Jogos.streetfighter6.nome} {Jogos.streetfighter6.preco}</p>
                <Link to="/pagamento">
                <input type="button" className={styles.downloadButton} value="Comprar"/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default StreetFighter6