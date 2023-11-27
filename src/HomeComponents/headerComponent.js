import { Link } from 'react-router-dom'
import styles from './header.module.css'

function HeaderComponent() {
    return (
        <>
        <div className={styles.header}>
        <ul>
            <li><Link to="/">Início</Link></li>
            <li>Biblioteca</li>
            <li>Loja</li>
            <li>Categorias</li>
            <li><input type="text" placeholder="Buscar..."></input></li>
            <li><input type="button" value='Entrar'className={styles.btnLogin}/></li>
        </ul>
        </div>
        </>
    )
}
export default HeaderComponent