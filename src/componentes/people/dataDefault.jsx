import styles from '../app.module.css';

export default function dataPeople () {
    return (
        <div>
            <ul className={styles.dataContainer}>
                <li className={styles.peopleText}>Nome: </li>
                <li className={styles.peopleText}>Nome Completo: </li>
                <li className={styles.peopleText}>País: </li>
                <li className={styles.peopleText}>Cidade: </li>
                <li className={styles.peopleText} >Telefone: </li>
            </ul>
        </div>
    )
}