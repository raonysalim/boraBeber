import styles from './app.module.css'


export default function peoples (props){

    const coqueteis = [
        {name:'Rafael', fullname:'Rafael Coelho', country:'Brazil', city:'São Paulo', telephone:'+55 11 123456789'},
        {name:'Amanda', fullname: 'Amanda Santos', country:'Brazil', city:'Bauru', telephone:'+55 14 541236987'},
        {name:'Jorge', fullname: 'Jorge da Silva', country:'Brazil', city:'João Pessoa', telephone:'+55 83 548796215'},
        {name:'Ana', fullname: 'Ana Clara Caetano', country:'Brazil', city:'Rio de Janeiro', telephone:'+55 21 854778962'}
    ]

    let nome=[]
    const dados=props.dados


    switch(dados){
        case 'Rafael':
            nome=Object.values(coqueteis[0])
            break;
        case 'Amanda':
            nome=Object.values(coqueteis[1])
            break;
        case 'Jorge':
            nome=Object.values(coqueteis[2])
            break;
        case 'Ana':
                nome=Object.values(coqueteis[3])
                break;    
    }
    const visible=()=>{
        if (nome.length>0)
            return true
            else return false
    }

    console.log(visible())
     return(
        <div className={visible()?styles.peopleContainer:styles.displayNone}>
        <p className={styles.peopleText}>
        Nome: {nome[0]}
        </p> 
        <p className={styles.peopleText}>
        Nome Completo: {nome[1]}
        </p>
        <p  className={styles.peopleText}>
        País: {nome[2]}
        </p> 
        <p  className={styles.peopleText}>
        Cidade: {nome[3]}
        </p> 
        <p  className={styles.peopleText}>
        Celular: {nome[4]}
        </p>  
        </div>
    )
}