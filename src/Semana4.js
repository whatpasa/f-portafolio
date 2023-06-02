import React from 'react'
import './styles/ball.css'
function Semana4() {
  return (
    <div className='content-weeks2' id='s4'>
      <h1 id='title-content'>Semana 4 - Pelota</h1>
    <div className="container">
        <br/>
        <div id="ball" > </div>
        <br/>
        <div className="button">
            <button  className="btn" id="play" >play</button>
            <button  className="btn" id="pause">pause</button>
            <button  className="btn" id="stop">stop</button>
            <button  className="btn" id="reverse">reverse</button>
          </div>          
        <br/>
    </div>
    </div>
  )
}

export default Semana4