
export default function peoples (){

    const coqueteis = [
        {name:'Rafael', fullname:'Rafael Coelho', country:'Brazil', city:'São Paulo', telephone:'+55 11 123456789'},
        {name:'Amanda', fullname: 'Amanda Santos', country:'Brazil', city:'Bauru', telephone:'+55 14 541236987'},
        {name:'Jorge', fullname: 'Jorge da Silva', country:'Brazil', city:'João Pessoa', telephone:'+55 83 548796215'},
        {name:'Ana', fullname: 'Ana Clara Caetano', country:'Brazil', city:'Rio de Janeiro', telephone:'+55 21 854778962'}
    ]

    let pessoas
    function peoples(i) {
        return(
           pessoas=coqueteis[i]
         )
     }
    
     peoples(0)
    const nome=()=>{
        return pessoas.name
    }
    

    console.log(nome())
     return(
        <div>
        <p>nomes:</p>  
        </div>
    )
}