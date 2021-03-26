import React, { useState, useEffect} from  'react';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './comanda.css';
import { addComanda, remComanda, updateComanda } from '../../../store/modules/comandas/actions';
import { MdAddCircle, MdRemoveCircle, MdDelete } from  'react-icons/md';
import api from '../../../services/api';
import Sidebar from '../../Sidebar'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()

export default function Comanda(){

    /* usado para buscar os dados no redux */
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
        try{
            if(mesa === ''){
                document.getElementById('num_mesa').style.borderColor = "#F95C5C"
                toast.error('Escolha uma mesa disponivel!')
            }else if(mesa === '-'){
                document.getElementById('num_mesa').style.borderColor = "#F95C5C"
                toast.error('Escolha uma mesa disponivel!')
            }else if(client === ''){
                document.getElementById('client').style.borderColor = "#F95C5C"
                toast.error('O Nome do cliente está vazio!')
            }else if(total === '0.00'){
                document.getElementById('table-menu').style.borderColor = "#F95C5C"
                toast.error('Adicione pratos a comanda!')
            }
            else{
                dispatch({
                    type: "ADD_COMANDA_TO_QUEUE",
                    mesa,
                    itens,
                    client,
                    total
                    
                }) 
                
                toast.success('Comanda criada com Sucesso!')

                document.getElementById('client').value = ''
                
            }   
        }catch(e){
            alert(e)
        }
        
    }

    /* usado para verificar se existe comandas nas listas(queue, cozinha) */
    const verify_on_queue = useSelector(state => state.queue_cozinha);
    const verify_on_cook = useSelector(state => state.cooking);

    let mesas_ocupadas = []

    function validation(verify_on_queue, verify_on_cook){

        //step 1: criar o array com todas as mesas ocupas
        verify_on_queue.forEach((queue) => {
            
            mesas_ocupadas.push(queue.mesa)
        });

        verify_on_cook.forEach((cook) => {
            
            mesas_ocupadas.push(cook.mesa)
        });

        //console.log("encontrada no array?", mesas_ocupadas)

        //step 2: pegar o valor que esta no options e comparar com os valores do array
        //var mesa_disponivel = document.getElementById('num_mesa')
        let mesa_disponivel = document.querySelectorAll('#option_mesa')
        
        
        console.log("mesa doom option:", mesa_disponivel)

        mesa_disponivel.forEach(d => {
            mesas_ocupadas.forEach(i =>{
                if(d.textContent === i){
                    
                    //console.log("a mesa: ", d.textContent , "esta indisponivel")
                    d.innerHTML = "-"
                    d.setAttribute('disable', 'true')
                }
            })
        })
        
    }

    validation(verify_on_queue, verify_on_cook)

    return(
        <div className="container">
        <Sidebar/>
            <div className="new-comanda">
                <h1>nova comanda</h1>          
                    <select className="list-container" id="num_mesa" onChange={()=>setMesa(document.getElementById('num_mesa').value)}>
                            <option value="selecione uma mesa" defaultChecked="true" id="option_mesa">selecione uma mesa</option>
                            <option value="Mesa 01" id="option_mesa">Mesa 01</option>
                            <option value="Mesa 02" id="option_mesa">Mesa 02</option>
                            <option value="Mesa 03" id="option_mesa">Mesa 03</option>
                            <option value="Mesa 04" id="option_mesa">Mesa 04</option>
                            <option value="Mesa 05" id="option_mesa">Mesa 05</option>
                            <option value="Mesa 06" id="option_mesa">Mesa 06</option>
                            <option value="Mesa 07" id="option_mesa">Mesa 07</option>
                            <option value="Mesa 08" id="option_mesa">Mesa 08</option>
                            <option value="Mesa 09" id="option_mesa">Mesa 09</option>
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

