import React from "react"
import styles from './componentes/app.module.css'
import LinkPeople from './componentes/navPeoples'
import Peoples from './componentes/peoples'

function App() {

  return ( 
    <div>
      <div className={styles.main}>
      <div  className={styles.titleContainer}>
       <p >Lista</p> 
      </div>
     <LinkPeople/> 
     <Peoples/>
      </div>
    </div> 
  )
}

export default App

