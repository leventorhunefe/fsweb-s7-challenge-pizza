import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function Form({pizza,order,setOrder,reset}) {

    console.log(order);
    let history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(handleValid()) return;
        axios.post('https://reqres.in/api/pizza', order)
          .then(function (response) {
            console.log(response);
            history.push("/success")
            reset();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleValid = ()=>{
        if(order.boyut === '') {
            alert('Lutfen boyut secimi yapiniz');
            return true
        } else if(order.musteriIsim.trim().length < 3) {
            alert('Lutfen en uc harften olusan isim giriniz');
            return true
        } else if(order.malzemeler.length <= 3) {
            alert('Lutfen en az dort malzeme seciniz');
            return true
        } else if(order.malzemeler.length > 10) {
            alert('Lutfen en fazla on malzeme seciniz');
            return true
        }
        else {
            return false
        }
    }

    const handleChange = (event)=>{
        setOrder({...order, [event.target.name]: event.target.value})
    }

    const handleCheckbox = (event,malzeme)=>{
        if(!order.malzemeler.includes(malzeme)) {
            setOrder({...order, [event.target.name]: [...order.malzemeler,malzeme]})
        } else {
            setOrder({...order, [event.target.name]: order.malzemeler.filter(item=>item!==malzeme)})
        }
    }

    const handleDegistirici = (event)=>{
        switch(event.target.className) {
            case "leftButton":
              if(order.adet>1) {
                setOrder({...order,adet:(order.adet-1)})
              } else {
                alert("En az bir adet siparis verebilirsiniz")
              }
              break;
            case "rightButton":
              if(order.adet<10) {
                setOrder({...order,adet:(order.adet+1)})
              } else {
                alert("En fazla on adet siparis verebilirsiniz")
              }
              break;
          }
    }

    const boyutKarti = (boyutlar) => { 
        return (
            <div className='boyutKarti'>
            <br></br>
                    <br></br>
                <h2>Boyut Seç</h2>
                <br></br>

                <div className='boyutContainer'>
                    {boyutlar.map((boyut,index) => <label onChange={handleChange} key={index}><input type="radio" name="boyut" value={boyut}/>{boyut}</label>)}
                </div>
            </div>
      )}

    const hamurKarti = (hamurlar) => { 
        return (
            <div className='hamurKarti'>
            <br></br>
                    <br></br>
                <label>
                    <h2>Hamur Seç</h2>
                    <br></br>

                    <select onChange={handleChange} name="hamur" id="hamur">
                    {hamurlar.map((hamur,index) => <option value={hamur} key={index}>{hamur}</option>)}
                    </select>
                </label>
            </div>
    )}

    const malzemeKarti = (malzemeler) => { 
        return (
            <div className='malzemeKarti'>
                        <br></br>
            <br></br>
            <br></br>
            <br></br>
                <h2>Ek Malzemeler</h2>
                <br></br>


                <p>En fazla 10 malzeme seçebilirsiniz</p>
                <br></br>


                <div className='malzemelerContainer'>
                    {malzemeler.map((malzeme,index)=>

                    <label key={index} className='malzeme'>
                    <br></br>
                        <input onChange={(event)=>handleCheckbox(event,malzeme)} type="checkbox" name="malzemeler"/><span>{malzeme}</span>
                    </label>
                    )}
                </div>
            </div>
      )}

    const notKarti = () => { 
        return (
            <div className='notKarti'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <label>
                <h2>Isminiz</h2>
                <br></br>

                <input onChange={handleChange} value={order.musteriIsim} name="musteriIsim" type="text" />
                </label>
                <label>
                <br></br>
                    <br></br>
                <h2>Siparis Notu</h2>
                
                <textarea onChange={handleChange} value={order.siparisNotu} name="not" id="not"></textarea>
                </label>
                <br></br>
                    <br></br>
                    <br></br>

            </div>
    )}

    const ozetKarti = () => { 

        let malzemelerTutar = order.adet * order.malzemeler.length * order.urun.ekMalzemeFiyat;
        let toplamTutar = malzemelerTutar + order.adet * order.urun.fiyat;
    
        return (
            <div className='ozetKarti' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='adetContainer' style={{ flex: '15%' }}>
                    <button type='button' className='leftButton' onClick={handleDegistirici}>-</button>
                    <span>{order.adet}</span>
                    <button type='button' className='rightButton' onClick={handleDegistirici}>+</button>
                </div>
                <div className='ozetContainer' style={{
                    border: '2px solid #ccc', // Çerçeve rengi ve kalınlığı
                    borderRadius: '10px', // Çerçevenin köşelerini yuvarlar
                    padding: '20px', // Kart içeriğinin çerçeve ile arasındaki boşluk
                    flex: '65%', // Özet konteynırını genişletmek için
                    marginLeft: '20px', // Sağ taraftan kartla bitişik olması için boşluk bırakır
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start' // İçerikleri üstten başlatır
                }}>
                    <h2>Siparis Toplami</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Secimler</span>
                        <span>{malzemelerTutar}₺</span>
                    </div>
                    <div>
                        <span>Toplam</span>
                        <span>{toplamTutar}₺</span>
                    </div>
                    <button>Siparis Ver</button>
                </div>
            </div>
        );
    }
    
    
    
  return (
    
    <form onSubmit={handleSubmit} className='form'>
    
        <div className='formContainer'>
            {boyutKarti(pizza.boyutlar)}
            <div></div>
            {hamurKarti(pizza.hamurlar)}
            <div></div>
        </div>
        {malzemeKarti(pizza.malzemeler)}
        {notKarti()}
        {ozetKarti()}
    </form>
  )
}

export default Form