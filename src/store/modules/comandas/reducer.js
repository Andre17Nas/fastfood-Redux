/* Immer: ajuda a trabalhar com imutabilidade de variaveis */
import produce from "immer";

export default function reducer(state=[], action){ 

    switch(action.type){
        case 'ADD_ITEM_COMANDA':
            return produce(state, draft => {
                const itemIndex = draft.findIndex(item=> item.name === action.item.name)

                if(itemIndex >= 0){
                    draft[itemIndex].qtd += 1;
                }else{
                draft.push({
                    ...action.item,
                    qtd: 1,
                })
                }
            })    
            
        case 'REMOVE_ITEM_COMANDA':
            return produce(state, draft =>{
                const itemIndex = draft.findIndex(item => item.id === action.id)

                if(itemIndex >= 0){
                    draft.splice(itemIndex, 1);
                }
            })

        case 'UPDATE_QTD' : {

            if(action.qtd <= 0){
                return state
            }
            return produce(state, draft =>{
                const itemIndex = draft.findIndex(item => item.name === action.name)

                if(itemIndex >= 0){
                    draft[itemIndex].qtd = Number(action.qtd)
                }
            })
        }

        /* Resolvi deixar por enquanto afim de estudo - mas nao estou usando mais */
        case 'TOTAL_COMANDA':

            return produce(state, draft => {              

            /* 
            example 1

            const array1 = [ 1, 2, 3 ,4]
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            
            // 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer));
            */

           /*
            example 2

            const total = action.total
            console.log(total.reduce((acc, currentValue) => acc + currentValue))

           */

            /*
            example 3

            const array_object = [{x: 1 , y: 2 }, { x: 2 , y: 2}, {x: 3 , y: 2}].reduce((a, b) => a + b.x * b.y, 0)
            */

            const total = action.itens.reduce((a, b) => a + b.qtd * b.price, 0) 
            console.log("total: ", total)
            })
   
        default:
            return state /* */

    }
}