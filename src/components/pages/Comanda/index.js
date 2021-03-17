import React, { useState, useEffect} from  'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './comanda.css';
import { addComanda, remComanda, updateComanda } from '../../../store/modules/comandas/actions';
import { MdFormatListBulleted, MdAddCircle, MdRemoveCircle, MdRestaurantMenu, MdDelete } from  'react-icons/md';
import api from '../../../services/api';

export default function Comanda(){

    
    const itens = useSelector(state => state.reducer);
    console.log(itens)
    /* 
    
    # state para comanda 
    
    - Nome do cliente v
    - Mesa v
    - pedidos v
    - Preço  
    
    */
   // const [comanda, setComanda] = useState([]); /* dados da comanda */
   // const [cliente, setCliente] = useState(''); /* nome do cliente */
    const [mesa, setMesa] = useState(''); /* nome da mesa */
  //  const [itempedido, setItempedido] = useState([]); /* armazena os items */
  //  const [price, setPrice] = useState(0.00); /* total da comanda */

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
        <div className="container">
            <div className="new-comanda">
                <h1><MdFormatListBulleted size={40} className="icon-title"/>Nova Comanda</h1>          
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
                {pedido.map( foods =>(       
                <ul>
                    <li id={foods.id}>{foods.name}<span> R$</span>{foods.price}<MdAddCircle size={28} id="add"
                        onClick={()=>{
                            adicionar_item_comanda(foods)
                        }}
                    /></li>
                </ul>
                ))}              
            </div>
            <div className="view-comanda">
                <MdRestaurantMenu size={100}/>
                    <div className="price-comanda">
                    <input type="text" placeholder="Nome do Cliente" id="name_client"/>
                        
                        {itens.map(i =>( 
                            <ul>
                                <li key={i.id}><span>{i.qtd} qtd </span> {i.name} <span> R$</span> {i.price} 
                                <MdRemoveCircle size={28} id="rm" onClick={()=> decrementQtd(i)}/>
                                <MdDelete size={28} id="rm" onClick={()=> remover_item_comanda(i.id)}/></li>
                            </ul>
                        ))}
                        

                    </div>
                    <div className="price"><span>TOTAL: </span> R$200,00</div>
                <button type="button" className="btn-price" onClick={()=>registrar_Comanda(pedido)}>Adicionar</button>
            </div>
        </div>
    );
}

