import React from "react"
import {Link} from "react-router-dom"
import styles from "./app.module.css"
import Data from './people/dataDefault'

export default function linkPeople() {

  return ( 

    <div>
        <nav className={styles.containerNav}>
          <ul className={styles.barraNav}>
          <Link className={styles.textNav} to='/rafael'>Rafael</Link>
          <Link className={styles.textNav} to='/amanda'>Amanda</Link>
          <Link className={styles.textNav} to='/jorge'>Jorge</Link>
          <Link className={styles.textNav} to='/ana'>Ana</Link>
          </ul>
        </nav>  
    </div> 
)
}