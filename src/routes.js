import React from 'react' 
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Comanda from './components/pages/Comanda'
import Cozinha from './components/pages/Cozinha'
import Queue from './components/pages/Queue_comandas'
import Error from './components/pages/Error404'

export default function Routes(){
    return(
            <Switch>
                <Route exact path="/" exact component={Comanda}/>
                <Route exact path="/cozinha" exact component={Cozinha}/>
                <Route exact path="/fila-comandas" exact component={Queue}/>
                <Route path="*" component={Error}/>
            </Switch>
    );
}