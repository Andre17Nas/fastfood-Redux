import produce from "immer";

export default function cooking(state = [], action){

    switch(action.type){
        case 'COOKING':
            //console.log("cozinhando: ", action)
            return [...state, action]
        case 'PRATO_PRONTO':
            return produce(state, draft =>{
                const itemIndex = draft.findIndex( item => item.mesa === action.mesa)

                if(itemIndex >= 0){
                    draft.splice(itemIndex, 1)
                }
            })
        default:
            return state;
    }
}