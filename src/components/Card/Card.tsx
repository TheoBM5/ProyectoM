
import './Card.css';
import {Button} from '../Buttons/Button';

export function Card() {
  return (
    <>
      <div className="card">
        <div className="card-content">
          {/* Contenido de la tarjeta */}
          <h2>Título de la tarjeta</h2>
          <p>Contenido de la tarjeta...</p>
        </div>
      </div>
      <div className='botonesLinea'>
        <Button type='button-red' text="Muy Mal"/>
        <Button type='button-orange' text="Mal"/>
        <Button type='button-yellow' text="Regular"/>
        <Button type='button-green' text="Bien"/>
        
      </div>
    </>
  );
}

export default Card