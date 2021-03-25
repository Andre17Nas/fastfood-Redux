import produce from "immer";

export default function queue_cozinha(state=[], action){

    switch(action.type){
        case "ADD_COMANDA_TO_QUEUE": /* adiciona a comanda na fila de espera */
        //console.log("add", action)
        return [...state, action]

        case "QUEUE_COZINHA": /* remove a comanda da fila de espera */
            return produce(state, draft =>{
                const itemIndex = draft.findIndex(item => item.mesa === action.mesa)

                if(itemIndex >= 0){
                    draft.splice(itemIndex, 1)
                }
            })
        default:
            return state;
    }
}