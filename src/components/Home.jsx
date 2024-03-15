import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <header className='header'>
      <div className='header-container'>
        <img src="../Assets/mile1-assets/logo.svg" alt="logo" />
        <h1>KOD ACIKTIRIR< br />PIZZA DOYURUR</h1>
        <Link to="/order">
        <button>ACIKTIM</button>
        </Link>
      </div>
    </header>
  )
}

export default HomePage