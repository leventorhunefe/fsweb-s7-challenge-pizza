import { useState } from 'react'
import './reset.css'
import './App.css'
import {data} from './data.json'
import Home from './components/Home'
import PizzaOrderer from './components/PizzaOrderer'
import Success from './components/Success'
import {Switch, Route} from "react-router-dom";

const {urun,pizza,sayfa} = data
const initialValue = {urun: urun, boyut:"", hamur:"Ince", malzemeler:[],adet: 1, musteriIsim:""}

function App() {
  const [order, setOrder] = useState(initialValue)
  const reset = () => {
    setOrder(initialValue)
  }

  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/order">
        <PizzaOrderer pizza={pizza} sayfa={sayfa} order={order} setOrder={setOrder} reset={reset}/>
      </Route>
      <Route exact path="/success">
        <Success/>
      </Route>
    </Switch>
    </>
  )
}

export default App
