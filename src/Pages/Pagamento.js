import React from "react";
import HeaderComponent from "../Components/headerComponent";
import styles from "./Pagamento.module.css"
import { Jogos } from "../Pages/Loja";

function PagamentoPage() {
    return(
        <>

        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
         <h1 className={styles.pageTitle}>Pagamento</h1>
         <p></p>
        </div>
        </>
    )
}

export default PagamentoPage