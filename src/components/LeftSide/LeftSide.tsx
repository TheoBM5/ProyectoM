import './LeftSide.css'; 
import UserCard from '../UserCard/UserCard';

export function LeftSide() {
  return (
    <nav className="leftsidebar">
        <div className="side">
            <span className='header-tittle'><h2 className='appTitulo'>MindBoost</h2></span>
            <UserCard />  
            <a className='botonEnlace' href="/">Inicio</a>
            <a className='botonEnlace' href="/study">Tarjetas</a>
            <a className='botonEnlace' href="/explore">Configuración</a>
        </div>
    </nav>
  )
}

export default LeftSide