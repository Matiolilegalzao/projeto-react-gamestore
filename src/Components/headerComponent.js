import { Link } from 'react-router-dom'
import styles from './header.module.css'

function HeaderComponent() {
    return (
        <>
        <div className={styles.header}>
        <ul className={styles.navbarList}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/biblioteca">Biblioteca</Link></li>
            <li><Link to="/loja">Loja</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><input type="text" placeholder="Buscar..."></input></li>
            <li><Link to="/registro"><input type="button" value='Entrar'className={styles.btnLogin}/></Link></li>
        </ul>
        </div>
        </>
    )
}
export default HeaderComponent