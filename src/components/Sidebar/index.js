import React from 'react'
import {Link} from  'react-router-dom'
import { MdDashboard, MdHistory, MdRestaurant, MdAttachMoney, MdWhatshot } from 'react-icons/md'
import { FaAlignLeft } from 'react-icons/fa'


export default function Sidebar(){

    /*
    
    Reutilizar estes itens no futuro

    <li id="li"><MdAttachMoney size={26} id="sidebar-ico"/> PAGAMENTOS</li>
                <li id="li"><MdHistory size={26} id="sidebar-ico"/> HISTORICO</li>
                <li id="li"><MdDashboard size={26} id="sidebar-ico"/> DASHBOARD</li>

    */

    return(
        <div className="sidebar">
            <ul>
                <Link to="/" id="link-li"><li id="li"><MdRestaurant size={26} id="sidebar-ico"/> NOVA COMANDA</li></Link>
                <Link to="/fila-comandas" id="link-li"><li id="li"><FaAlignLeft size={26} id="sidebar-ico"/> COMANDAS</li></Link>
                <Link to="/cozinha" id="link-li"><li id="li"><MdWhatshot size={26} id="sidebar-ico"/> COZINHA</li></Link>             
            </ul>
        </div>
    );
}