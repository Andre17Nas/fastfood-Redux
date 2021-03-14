import React from  'react'
import { MdRestaurantMenu, MdAttachMoney} from 'react-icons/md'
import '../Cozinha/cozinha.css'

export default function Cozinha(){
    return(
        <div className="container">
            <div className="fila-comandas">
                <div id="father">
                <div id="title"><MdRestaurantMenu size={30} id="icon-fila"/><h1>Fila de Comandas</h1></div>               
                        <div id="list-comanda">
                            <div className="simply-comanda">
                                MESA 01
                            </div> 

                            <div className="simply-comanda">
                                MESA 03
                            </div> 

                           
                            
                        </div> 
                </div>                                       
            </div>

        <div className="cozinha-comandas">
            <div id="title-rest"><MdRestaurantMenu size={30} id="icon-rest"/><h1>Preparando</h1></div>
            <div id="list-comanda">
            <div className="simply-comanda">
                MESA 01
            </div> 
                                                 
            </div>   
        </div>
        
        <div className="pagar-comandas">          
                <div id="father">
                <div id="title-side"><MdAttachMoney size={30} id="icon-pagar"/><h1>Á cobrar</h1></div>             
                    <div id="list-comanda">
                        <div className="simply-comanda">
                                MESA 01
                        </div> 

                        <div className="simply-comanda">
                                MESA 03
                        </div> 

                        <div className="simply-comanda">
                                MESA 03
                        </div>    
                            
                    </div> 
            </div>
            </div>
        </div>
    );
}