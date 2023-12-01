import HeaderComponent from "../Components/headerComponent"
import styles from "./Registro.module.css"
import { Link } from "react-router-dom"
function RegistroPage() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <form className={styles.formStyle}>
            <h1 className={styles.createAccount}>Cadastrar</h1>

            <label for="username" className={styles.formLabel}>Nome de usuário: <input type="text" id="username" minLength="3" className={styles.formInput}placeholder="Digite o username"/></label>
            <label for="password" className={styles.formLabel}>Senha: <input type="password" id="senha" minLength="8" className={styles.formInput} placeholder="Crie uma senha"/></label>
            <label for="email" className={styles.formLabel}>Email: <input type="email" id="email" className={styles.formInput} placeholder="Crie um email"/></label>
            
            <Link to='/login'>
                <p className={styles.loginLink}>Já tem uma conta?</p>
            </Link>
            <input type="submit" className={styles.formSubmit} value="Enviar"></input>

        </form>
        </>
    )
}


export default RegistroPage