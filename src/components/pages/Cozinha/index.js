import React from  'react'
import { useSelector } from 'react-redux'
import Sidebar from "../../Sidebar"
import './cozinha.css'
import { MdCheckCircle } from 'react-icons/md'

export default function Cozinha(){

    const itens_da_comanda = useSelector(state => state.reducer);
    console.log(itens_da_comanda)

    return(
        <div className="container-cozinha">
        <Sidebar/>
            <div className="content">
                <h1>status: cozinhando</h1>
                <div className="queue">
                    <div className="card-comanda">

                        <h1> MESA 01 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                    <div className="card-comanda">

                        <h1> MESA 07 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                    <div className="card-comanda">

                        <h1> MESA 013 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                    <div className="card-comanda">

                        <h1> MESA 06 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                    <div className="card-comanda">

                        <h1> MESA 03 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                    <div className="card-comanda">

                        <h1> MESA 09 </h1>
                        <p> is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <MdCheckCircle size={24} id="done"/>
                    </div>

                </div>
            </div>           
        </div>
    );
}