import React from "react"
import {Link} from "react-router-dom"
import styles from "./componentes/app.module.css"
import LinkPeople from './componentes/linkPeople'
import Peoples from './componentes/peoples'

function App() {

  return ( 
    <div>
    <LinkPeople/>
    <Peoples/>
    </div> 
  )
}

export default App

