import './LeftSide.css'; 
import CardTopic from '../CardTopic/CardTopic';
import UserCard from '../UserCard/UserCard';

export function LeftSide() {
  return (
    <nav className="leftsidebar">
        <div className="side">
            <span className='header-tittle'><h2 className='appTitulo'>Aplicacion :D</h2></span>
            <UserCard />  
            <a className='botonEnlace' href="/">Inicio</a>
            <a className='botonEnlace' href="/tarjetas">Tarjetas</a>
            <a className='botonEnlace' href="/explore">Configuración</a>
        </div>
        <div className='deck'>
          <CardTopic />
          <CardTopic />
        </div>
              
    </nav>
  )
}

export default LeftSide