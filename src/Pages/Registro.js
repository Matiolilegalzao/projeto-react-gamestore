import React, { useState } from 'react';
import HeaderComponent from "../Components/headerComponent";
import styles from "./Registro.module.css";
import { Link } from "react-router-dom";

function RegistroPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}\nEmail: ${email}`);
        // Aqui você pode realizar a lógica de envio do formulário ou fazer o que for necessário com os dados.
    }

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <form className={styles.formStyle} onSubmit={handleSubmit}>
                <h1 className={styles.createAccount}>Cadastrar</h1>

                <label htmlFor="username" className={styles.formLabel}>
                    Nome de usuário:
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="3"
                        className={styles.formInput}
                        placeholder="Digite o username"
                    />
                </label>

                <label htmlFor="password" className={styles.formLabel}>
                    Senha:
                    <input
                        type="password"
                        id="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="8"
                        required
                        className={styles.formInput}
                        placeholder="Crie uma senha"
                    />
                </label>

                <label htmlFor="email" className={styles.formLabel}>
                    Email:
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.formInput}
                        placeholder="Crie um email"
                    />
                </label>

                <Link to='/login'>
                    <p className={styles.loginLink}>Já tem uma conta?</p>
                </Link>

                <input type="submit" className={styles.formSubmit} value="Enviar" />
            </form>
        </>
    );
}

export default RegistroPage;
