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
        default:
            return state /* */

    }
}