import React from 'react' 
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Comanda from './components/Comanda'
import Cozinha from './components/Cozinha'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Comanda}/>
                <Route exact path="/cozinha" component={Cozinha}/>
            </Switch>
        </BrowserRouter>
    );
}