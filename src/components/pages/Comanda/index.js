import React, { useState, useEffect} from  'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './comanda.css';
import { addComanda, remComanda, updateComanda } from '../../../store/modules/comandas/actions';
import { MdFormatListBulleted, MdAddCircle, MdRemoveCircle, MdDelete } from  'react-icons/md';
import { MdDashboard, MdHistory, MdRestaurant, MdAttachMoney, MdWhatshot } from 'react-icons/md'
import { FaAlignLeft } from 'react-icons/fa'
import api from '../../../services/api';

export default function Comanda(){

    
    const itens = useSelector(state => state.reducer);
    const total_comanda = useSelector(state => state.reducer)
    console.log("um array: ", total_comanda)


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

    function registrar_Comanda(nova_comanda){
        //setCliente(document.getElementById('name_client').value)
        //setComanda(...comanda, cliente, mesa)
        dispatch({
            type: "FILA_COMANDAS", /* envia para o Reducer */
            /* preciso enviar a comanda com todos os dados */
            nova_comanda 
        })
       // console.log(comanda)
    }

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

    return(
        <>
        <div className="container">
        <div className="sidebar">
            <ul>
                <li id="li"><MdRestaurant size={26} id="sidebar-ico"/> NOVA COMANDA</li>
                <li id="li"><FaAlignLeft size={26} id="sidebar-ico"/> COMANDAS</li>
                <li id="li"><MdWhatshot size={26} id="sidebar-ico"/> COZINHA</li>
                <li id="li"><MdAttachMoney size={26} id="sidebar-ico"/> PAGAMENTOS</li>
                <li id="li"><MdHistory size={26} id="sidebar-ico"/> HISTORICO</li>
                <li id="li"><MdDashboard size={26} id="sidebar-ico"/> DASHBOARD</li>
            </ul>
        </div>
            <div className="new-comanda">
                <h1>nova comanda</h1>          
                    <select className="list-container" id="num_mesa" onChange={()=>setMesa(document.getElementById('num_mesa').value)}>
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
                <input type="text" placeholder="Nome do Cliente"/>
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
                <div className="price"><span id="span-total">TOTAL: </span> R$: { parseFloat(itens.reduce((a, b) => a + b.qtd * b.price, 0.00)).toFixed(2)}</div>
                <button type="button" className="btn-price" onClick={()=>registrar_Comanda(pedido)}>Adicionar</button>                
            </div> 
                 
        </div>
    </>
    );
}

