import HeaderComponent from "../Components/headerComponent"
import styles from "./Biblioteca.module.css"
function BibliotecaPage() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <div className={styles.mainContent}>
            <h1 className={styles.title}>Biblioteca</h1>
        </div>
        </>
    )
}

export default BibliotecaPage