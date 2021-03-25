import React from 'react'
import { Link } from "react-router-dom"
import Sidebar from '../../Sidebar'
import { MdCheckCircle, MdWhatshot } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'

export default function Queue(){

    const comanda = useSelector(state => state.queue_cozinha);

    const dispatch = useDispatch();

    //deletar item
    function removeQueue(mesa){
        dispatch({
            type: "QUEUE_COZINHA",
            mesa
        })
        
        
    }

    function cooking(client, itens, mesa, total){
        dispatch({
            type: "COOKING",
            client,
            itens,
            mesa,
            total
        })

        removeQueue(mesa)
    }


    return(
        <div className="container-cozinha">
        <Sidebar/>
            <div className="content-queue">
                <h1>status: Na fila . . .</h1>
                <div className="queue">
                    {comanda.map(c => (
                            <div className="card-comanda" key={c.client}>

                                <h1> {c.mesa}: {c.client}</h1>
                                <p>{c.itens.map(i =>(
                                    <p>{i.name}</p> 
                                    ))}</p>
                                    <MdWhatshot size={30} id="cook" onClick={()=>{ cooking(c.client, c.itens, c.mesa, c.total)}} label="Adicionar na cozinha"/>
                            </div>
                    ))}
                </div>
            </div>           
        </div>
    );
}