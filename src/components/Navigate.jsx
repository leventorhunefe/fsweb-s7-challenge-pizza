import React from 'react'
import { Link } from "react-router-dom";

function Navigate({sayfa}) {
  return (
    <div className='yonlendirmeKarti'>
            <nav>
                {sayfa.yonlendirmeler.map((yonlendirme,index) => <Link to={`/${yonlendirme.url}`} key={index}>{yonlendirme.isim}</Link>)}
            </nav>
        </div>
  )
}

export default Navigate