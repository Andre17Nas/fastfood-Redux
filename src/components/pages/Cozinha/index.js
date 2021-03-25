import React from  'react'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from "../../Sidebar"
import './cozinha.css'
import { MdCheckCircle } from 'react-icons/md'

export default function Cozinha(){

    const comanda = useSelector(state => state.cooking);
    const dispatch = useDispatch();

    return(
        <div className="container-cozinha">
        <Sidebar/>
            <div className="content-cook">
                <h1>status: cozinhando</h1>
                <div className="queue">
                    { comanda.map(c => (
                            <div className="card-comanda" key={c.mesa}>

                                <h1> {c.mesa} : {c.client} </h1>
                                <p>{c.itens.map(i =>(
                                <span>{i.name}, </span>
                                ))}</p>    
                                <MdCheckCircle size={24} id="done"/>
                            </div>
                        ))
                        }
                </div>
            </div>           
        </div>
    );
}