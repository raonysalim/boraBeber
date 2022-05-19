import {Link} from 'react-router-dom'
import NavPeoples from '../navPeoples'
import Calc from '../peoples'
import styles from '../app.module.css'

export default function ana(){
    return (
        <div>
        <div>
            <nav>
                <Link className={styles.home} to='/'>Voltar</Link>
                <NavPeoples/>
                <Calc dados='Ana'/>
        
            </nav>
        </div>    
    </div>
    )
}
