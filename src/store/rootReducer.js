import { combineReducers } from 'redux'

import reducer from './modules/comandas/reducer'
import queue_cozinha from './modules/cozinha/reducer'
import cooking from './modules/cozinha/reducer_cooking'

export default combineReducers({
    reducer,
    queue_cozinha,
    cooking,

})

