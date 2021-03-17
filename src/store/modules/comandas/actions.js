export  function addComanda(item){
    return {
        type: "ADD_ITEM_COMANDA",
        item
    }
}

export  function remComanda(id){
    return {
        type: "REMOVE_ITEM_COMANDA",
        id
    }
}

export function updateComanda(name, qtd){ /* eu deveria passar o id, no entando na minha api tenho outras listas com o mesmo id*/
    return {
        type: 'UPDATE_QTD',
        name,
        qtd
    }
}