import Sidebar from "../../Sidebar"
import './error.css'
import { FaRegSadCry } from 'react-icons/fa'

export default function Error(){
    return(
        <div className='container-cozinha'>
            <Sidebar/>
                <div className="content-error">
                    <div className="error-title">
                        <FaRegSadCry size={160} id="engrenagem"/>
                        <h1>Esta Página não foi encontrada! </h1>
                    </div>
                </div>
        </div>
    );
}