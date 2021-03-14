import React, { useState, useEffect} from  'react'
import './comanda.css'
import { MdFormatListBulleted, MdAddCircle, MdRemoveCircle, MdRestaurantMenu } from  'react-icons/md'
import api from '../../services/api'

export default function Comanda(){
 
    const [food, setFood] = useState([]);
    const [category, setCategory] = useState('burgers');

    useEffect(()=>{

        async function loadApi(){

            const response = await api.get(category);
            setFood(response.data);
            console.log(response.data);

        }

        loadApi();

    },[category])

    return(
        <div className="container">
            <div className="new-comanda">
                <h1><MdFormatListBulleted size={40} className="icon-title"/>Nova Comanda</h1>          
                    <select className="list-container">
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
                {food.map( foods =>(       
                <ul>
                    <li id={foods.id}>{foods.name}<span> R$</span>{foods.price}<MdAddCircle size={28} id="add"/></li>
                </ul>
                ))}              
            </div>
            <div className="view-comanda">
                <MdRestaurantMenu size={100}/>
                    <div className="price-comanda">
                    <input type="text" placeholder="Nome do Cliente"/>
                        <ul>
                            <li><span>3 qtd </span>Duplo Cheedar<span> R$</span>29,00 <MdRemoveCircle size={28} id="rm"/></li>
                            <li><span>3 qtd </span>Duplo Cheedar<span> R$</span>29,00 <MdRemoveCircle size={28} id="rm"/></li>
                            <li><span>3 qtd </span>Duplo Cheedar<span> R$</span>29,00 <MdRemoveCircle size={28} id="rm"/></li>
                            <li><span>3 qtd </span>Duplo Cheedar<span> R$</span>29,00 <MdRemoveCircle size={28} id="rm"/></li>
                        </ul>
                    </div>
                    <div className="price"><span>TOTAL: </span> R$200,00</div>
                <button className="btn-price">Adicionar</button>
            </div>
        </div>
    );
}

