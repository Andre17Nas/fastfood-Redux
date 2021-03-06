import React from  'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from  './store'
import Header from './components/Header'


function App() {
  return (
        <Provider store={store}>
        <Header/>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
