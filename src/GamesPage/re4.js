import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../Components/headerComponent";
import styles from "./Gamepage.module.css";
import { Jogos } from "../Pages/Loja";
import { Link } from "react-router-dom";

const precoJogo = parseFloat(Jogos.re4.preco.replace('R$', '').replace(',', '.'));
function Re4Remake() {
  const [saldo, setSaldo] = useState(10000); // Substitua 100 pelo seu valor inicial de saldo
  const navigate = useNavigate();

  function comprar() {
  /*if (saldo >= precoJogo) {
    setSaldo((prevSaldo) => prevSaldo - precoJogo);
    navigate("/pagamento"); // Navega para a página de pagamento
  } else {
    console.log("Saldo insuficiente");
  }*/
}


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
                <Link to="/pagamento">
                  <input type="button" className={styles.downloadButton} value="Comprar" />
                </Link>
            </div>
        </div>
        </>
    )
}


export default Re4Remake