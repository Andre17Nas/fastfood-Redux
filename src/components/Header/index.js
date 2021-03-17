import React from 'react'
import './header.css'
import { MdFiberNew, MdRestaurant } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <div className="header-container">
            <Link to="/">
                <span> <MdFiberNew size={20}/>voltar</span>
                </Link>

                <Link to="/cozinha">
                <span> <MdRestaurant size={20}/> painel de Comandas</span>
                </Link>
        </div>
    )
}