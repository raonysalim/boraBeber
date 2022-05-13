import {Link} from 'react-router-dom'
import NavPeoples from '../navPeoples'
import Calc from '../peoples'
import styles from '../app.module.css'
export default function rafael(){


    return (
        <div>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <NavPeoples/>
                    <Calc dados='Rafael'/>
                </nav>
            </div>    
        </div>
    
    )
}