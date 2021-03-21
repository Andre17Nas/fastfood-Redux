import React from  'react'
import { useSelector } from 'react-redux'
import { MdRestaurantMenu, MdAttachMoney} from 'react-icons/md'


export default function Cozinha(){

    const itens_da_comanda = useSelector(state => state.reducer);
    console.log(itens_da_comanda)

    return(
        <div className="container">
        <div id="back-to-home"> Adicionar uma Nova Comanda </div>
            <div className="fila-comandas">
                <div id="father">
                <div id="title"><MdRestaurantMenu size={30} id="icon-fila"/><h1>Fila de Comandas</h1></div>               
                        <div id="list-comanda">
                            
                                {(itens_da_comanda.map(i => {
                                    <div className="simply-comanda" key={i.id}> 
                                    {i.name}
                                    </div> 
                                }))
                                }
                            

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