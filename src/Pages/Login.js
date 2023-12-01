import HeaderComponent from "../Components/headerComponent"
import styles from "./Login.module.css"
import { Link } from "react-router-dom"
function LoginPage() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <form className={styles.formStyle}>
            <h1 className={styles.createAccount}>Fazer Login</h1>

            <label for="username" className={styles.formLabel}>Nome de usuário: <input type="text" id="username" minLength="3" className={styles.formInput}placeholder="Informe seu username"/></label>
            <label for="password" className={styles.formLabel}>Senha: <input type="password" id="senha" minLength="8" className={styles.formInput} placeholder="Informe sua senha"/></label>
           
            
            <Link to='/registro'>
                <p className={styles.loginLink}>Não tem uma conta?</p>
            </Link>
            <input type="submit" className={styles.formSubmit} value="Entrar"></input>

        </form>
        </>
    )
}


export default LoginPage