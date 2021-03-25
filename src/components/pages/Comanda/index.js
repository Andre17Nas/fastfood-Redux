import React, { useState, useEffect} from  'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './comanda.css';
import { addComanda, remComanda, updateComanda } from '../../../store/modules/comandas/actions';
import { MdAddCircle, MdRemoveCircle, MdDelete } from  'react-icons/md';
import api from '../../../services/api';
import Sidebar from '../../Sidebar'

export default function Comanda(){

    
    const itens = useSelector(state => state.reducer);


   // const [cliente, setCliente] = useState(''); /* nome do cliente */
    const [mesa, setMesa] = useState('');

    const [category, setCategory] = useState('burgers'); /* categora usado para escolher os pratos*/
    const [pedido, setPedido] = useState([]); /* recebe os dados da api*/
    const dispatch = useDispatch();

    useEffect(()=>{

        async function loadApi(){

            const response = await api.get(category);
            setPedido(response.data);

        }

        loadApi();

    },[category])

    /* functions para controlar itens da Comanda */
    function adicionar_item_comanda(item){
        dispatch(addComanda(item))
    }

    function remover_item_comanda(id){
        dispatch(remComanda(id))
    }

    /* functions */

    function decrementQtd(item){
        dispatch(updateComanda(item.name, item.qtd - 1))
    }

    function addComanda_to_queue(mesa, itens, client, total){
        dispatch({
            type: "ADD_COMANDA_TO_QUEUE",
            mesa,
            itens,
            client,
            total

        })
        
    }

    return(
        <div className="container">
        <Sidebar/>
            <div className="new-comanda">
                <h1>nova comanda</h1>          
                    <select className="list-container" id="num_mesa" onChange={()=>setMesa(document.getElementById('num_mesa').value)}>
                            <option value="selecione uma mesa" defaultChecked="true">selecione uma mesa</option>
                            <option value="Mesa 01">Mesa 01</option>
                            <option value="Mesa 02">Mesa 02</option>
                            <option value="Mesa 03">Mesa 03</option>
                            <option value="Mesa 04">Mesa 04</option>
                            <option value="Mesa 05">Mesa 05</option>
                            <option value="Mesa 06">Mesa 06</option>
                            <option value="Mesa 07">Mesa 07</option>
                            <option value="Mesa 08">Mesa 08</option>
                            <option value="Mesa 09">Mesa 09</option>
                        </select>
                    <select className="list-container" id="select" onChange={
                        ()=>{setCategory(document.getElementById("select").value)}}>
                            <option value="burgers">Hamburguers de Carne</option>
                            <option value="burgers_chicken">Hamburgers de Frango</option>
                            <option value="vegan">Saladas/Vegan</option>
                            <option value="drinks">Bebidas</option>
                            <option value="side_dish">Acompanhamento</option>                   
                            <option value="dessert">Sobremessa</option>
                    </select> 
                <div className="container-table">
                <table id="table-menu">
                {pedido.map( foods =>(  
                    <tr id={foods.id}>
                        <td>{foods.name}</td>
                        <td>R$: {parseFloat(foods.price).toFixed(2)}</td>
                        <td><MdAddCircle size={28} id="add-circle"
                        onClick={()=>{
                            adicionar_item_comanda(foods)
                        }}/></td>
                    </tr>     
                ))} 
                </table>
                </div>             
            </div>
            <div className="view-comanda">           
                <div className="view-content">
                <input type="text" placeholder="Nome do Cliente" id="client"/>
                   <div className="container-table-comanda">
                    <table id="list-menu">
                    {itens.map(i =>( 
                        <tr key={i.id}>
                            <td> {i.qtd} qtd</td>
                            <td> {i.name}</td>
                            <td> R$ {i.price}</td>
                            <td><MdRemoveCircle size={28} id="rm" onClick={()=> decrementQtd(i)}/></td>
                            <td><MdDelete size={28} id="del" onClick={()=> remover_item_comanda(i.id)}/></td>
                        </tr>
                        ))}
                    </table> 
                    
                   </div>    
                </div> 
                <div className="price"><span id="span-total">total: </span>
                R$ { 
                    parseFloat(itens.reduce((a, b) => a + b.qtd * b.price, 0.00)).toFixed(2)
                    
                    }</div>
                
                <button type="button" className="btn-price" onClick={()=>addComanda_to_queue(
                    mesa, itens, document.getElementById('client').value,
                    parseFloat(itens.reduce((a, b) => a + b.qtd * b.price, 0.00)).toFixed(2)
                )}>Adicionar</button>             
            </div>                 
        </div>
    );
}

