import React from 'react'
import Form from '../components/Form'
import Pizza from '../components/Pizza'
import Navigate from '../components/Navigate'

function PizzaOrderer({pizza,sayfa,order,setOrder,reset}) {

  return (
    <main className='orderPizza'>
        <section className='orderPizza-header'>

            <div className='orderPizza-header-container'>
            <br></br>
                    <br></br>
                <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
                <br></br>
                    <br></br>
                <Navigate sayfa={sayfa}/>
            </div>
        </section>
        <br></br>
                    <br></br>
        <section className='orderPizza-main'>
        
            <div className='orderPizza-main-container'>
            
            
                <Pizza order={order}/>
                <Form pizza={pizza} order={order} setOrder={setOrder} reset={reset}/>
            </div>
        </section>
    </main>
  )
}

export default PizzaOrderer