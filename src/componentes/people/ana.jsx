import {Link} from 'react-router-dom'
import NavPeoples from '../navPeoples'
import Calc from '../peoples'
import styles from '../app.module.css'

export default function ana(){
    return (
    <div>
        <p>teste1</p>
        <div>
            <nav className={styles.teste}>
                <Link to='/'>Home</Link>
                <NavPeoples/>
                <Calc dados='Ana'/>
        
            </nav>
        </div>    
    </div>
    )
}
