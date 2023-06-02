import {useState} from 'react'
import ImagenFigma from './images/ifigma.jpg'
import emmet1 from './images/emmet1.jpg'
import emmet2 from './images/emmet2.jpg'
import emmet3 from './images/emmet3.jpg'
import emmet4 from './images/emmet3.jpg'
import emmet5 from './images/emmet5.jpg'


function Semana2() {
    const [mostrarImagen, setMostrarImagen] = useState(false);

    const handleClick = () => {
      setMostrarImagen(!mostrarImagen);
    };
  
  return (
    <div className='content-weeks2' id='s2'>    
        <h1 id='title-content'>Semana2 - Diseño en Figma</h1>
        <div>
        <img  src={ImagenFigma}/>


        </div>





        <div>
            <br/>
            <h1>Emmet:</h1>
            <div onClick={handleClick} className='emmet-cont'>
                1.-
                {mostrarImagen ? (
                <img src={emmet1}alt="Imagen" />
                ) : (
                <p>header#header>div#menu>li*5>a[href="#"]</p>
                )}
            </div>
            <div onClick={handleClick} className='emmet-cont'>
                2.-
                {mostrarImagen ? (
                <img src={emmet2}alt="Imagen" />
                ) : (
                <p>header#header+nav#nav+(section#section>article#article)+aside#aside+footer#footer</p>
                )}
            </div>
            <div onClick={handleClick} className='emmet-cont'>
                3.-
                {mostrarImagen ? (
                <img src={emmet3}alt="Imagen" />
                ) : (
                <p>ejercicio3</p>
                )}
            </div>
            <div onClick={handleClick} className='emmet-cont'>
                4.-
                {mostrarImagen ? (
                <img src={emmet4}alt="Imagen" />
                ) : (
                <p>table>tbody>tr#fila$21*20>td*2</p>
                )}
            </div>
            <div onClick={handleClick} className='emmet-cont'>
                5.-
                {mostrarImagen ? (
                <img src={emmet5}alt="Imagen" />
                ) : (
                <p>ejercicio5</p>
                )}
            </div>
        </div>






    </div>
  )
}

export default Semana2