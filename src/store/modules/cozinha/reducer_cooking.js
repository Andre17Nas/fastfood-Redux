import produce from "immer";

export default function cooking(state = [], action){

    switch(action.type){
        case 'COOKING':
            console.log("cozinhando: ", action)
            return [...state, action]
        default:
            return state;
    }
}