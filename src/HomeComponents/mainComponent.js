import styles from './main.module.css'

function MainHomeComponent() {
    return (
        <>
        <div className={styles.main}>
            <p>Popular nesta semana</p>
            <div className={styles.container}>
                <div className={styles.item}>Item 1</div>
                <div className={styles.item}>Item 2</div>
                <div className={styles.item}>Item 3</div>
            </div>
        </div>
        </>
    )
}

export default MainHomeComponent