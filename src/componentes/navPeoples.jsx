import React from "react"
import {Link} from "react-router-dom"
import styles from './app.module.css'


export default function linkPeople() {

  return ( 

    <div>
        <nav>
          <ul className={styles.navBar}>
          <Link className={styles.navText} to='/rafael'>Rafael</Link>
          <Link className={styles.navText}to='/amanda'>Amanda</Link>
          <Link className={styles.navText} to='/jorge'>Jorge</Link>
          <Link className={styles.navText} to='/ana'>Ana</Link>
          </ul>
        </nav>  
    </div> 
)
}