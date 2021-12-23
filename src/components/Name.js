import styles from "./Name.module.css"

function Name({nome,idade,work}){
    return(
        <div className={styles.name}>
            <h2>Nome: {nome}</h2>
            <h3>Idade: {idade}</h3>
            <p className={styles.ps}>Profissão: {work}</p>
        </div>
    )
}

export default Name;