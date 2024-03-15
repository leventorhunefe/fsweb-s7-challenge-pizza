import React from 'react'

function Pizza({order}) {
  const urun = order.urun
  return (
    <div className='pizzaKarti'>
            <h2>{urun.isim}</h2>
            <br></br>
                    <br></br>
              <div className='pizzaKarti-cetvel'>
                  <h3>{urun.fiyat}₺</h3>
                  <br></br>
                    <br></br>
                    <br></br>
                    
                      <p></p>
                      <p>{urun.puan}</p>
                  <p>({urun.yorumSayisi})</p>
              </div>
            <p>{urun.aciklama}</p>
        </div>
  )
}

export default Pizza