import React from "react"
import {Link} from "react-router-dom"
import styles from "./componentes/app.module.css"
import LinkPeople from './componentes/navPeoples'
import Peoples from './componentes/peoples'

function App() {

  return ( 
    <div>
      <div className={styles.titleContainer}>
       <p className={styles.title}>Lista</p> 
      </div>
      <LinkPeople/>
      <Peoples/>
    </div> 
  )
}

export default App

