import React from "react";
import HeaderComponent from "../Components/headerComponent";
import styles from "./Pagamento.module.css"
import { Jogos } from "../Pages/Loja";

function PagamentoPage() {
    return(
        <>

        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
         <h1 className={styles.pageTitle}>Pagamento realizado!</h1>
         <h2 className={styles.subtitle}>Jogo adicionado à sua biblioteca.</h2>
         <p></p>
        </div>
        </>
    )
}
let jogoComprado = 0;

if(jogoComprado != 0){
    alert("Id do jogo: " + jogoComprado)
}

export { jogoComprado }
export default PagamentoPage