import {Link} from 'react-router-dom'
import NavPeoples from '../navPeoples'
import Calc from '../peoples'
import styles from '../app.module.css'

export default function amanda(){
    return (
        <div>
        <div>
            <nav>
                <Link className={styles.home} to='/'>Voltar</Link>
                <NavPeoples/>
                <Calc dados='Amanda'/>
            </nav>
        </div>    
    </div>
)
}