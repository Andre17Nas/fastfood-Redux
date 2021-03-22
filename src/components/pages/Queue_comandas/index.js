import React from 'react'
import { Link } from "react-router-dom"
import Sidebar from '../../Sidebar'
import { MdCheckCircle } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'

export default function Queue(){

    const comanda = useSelector(state => state.reducer);
    console.log("buscando: ", comanda)

    const dispatch = useDispatch();

    function addCozinha(comanda){
        dispatch({
            type: "QUEUE_COZINHA",
            comanda
        })
    }

    return(
        <div className="container-cozinha">
        <Sidebar/>
            <div className="content">
                <h1>status: Na fila . . .</h1>
                <div className="queue">
                    {comanda.map(c => (
                            <div className="card-comanda" key={c.client}>

                                <h1> {c.mesa}: {c.client}</h1>
                                <p>{c.itens.map(i =>(
                                    <p>{i.name}</p> 
                                    ))}</p>
                                <MdCheckCircle size={24} id="done"/>
                            </div>
                    ))}
                </div>
            </div>           
        </div>
    );
}