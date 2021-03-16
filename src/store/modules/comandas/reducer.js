
export default function reducer(state=[], action){ 

    switch(action.type){
        case 'ADD_ITEM_COMANDA':
            return [...state, action.item];          
        default:
            return state /* */

    }
}