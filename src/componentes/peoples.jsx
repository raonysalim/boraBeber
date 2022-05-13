
export default function peoples (props){

    const coqueteis = [
        {name:'Rafael', fullname:'Rafael Coelho', country:'Brazil', city:'São Paulo', telephone:'+55 11 123456789'},
        {name:'Amanda', fullname: 'Amanda Santos', country:'Brazil', city:'Bauru', telephone:'+55 14 541236987'},
        {name:'Jorge', fullname: 'Jorge da Silva', country:'Brazil', city:'João Pessoa', telephone:'+55 83 548796215'},
        {name:'Ana', fullname: 'Ana Clara Caetano', country:'Brazil', city:'Rio de Janeiro', telephone:'+55 21 854778962'}
    ]

   // const rafael=Object.values(coqueteis[0])
   // const amanda=Object.values(coqueteis[1])
   // const jorge=Object.values(coqueteis[2])
   // const ana=Object.values(coqueteis[3])

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

    let data=''
    nome.forEach((nome)=>{
        return data += nome+ ' '
      })

    console.log()
     return(
        <div>
        <p>teste:{data}l</p> 
        <ul></ul> 
        </div>
    )
}