import './Form.css';
import '../Buttons/Button'
import { Button } from '../Buttons/Button';
// import { Button } from '../Buttons/Button';
export function Form() {
    return (
      <>
          <div className='card-up'>
            <h3 className='title-up'>Registro</h3>
            <span className='sub-description'>Es necesario registrarse</span>
            <form>
                {/* <label htmlFor="firstname">First name: </label> */}
                <input placeholder='Nombre' type="text" name="firstname" required />
                <br />
                {/* {/* <label htmlFor="lastname">Last name: </label> */}
                <input placeholder='Apellido' type="text" name="lastname" required />
                <br />
                {/* {/* <label htmlFor="email">Email: </label> */} 
                <input placeholder='Email' type="email" name="email" required />
                <br />
                {/* {/* <label htmlFor="password">Password: </label> */} 
                <input placeholder='Contraseña' type="password" name="password" required />
                <br />

            </form>
            <div className='button-conteiner'>
              <Button type="" text="Enviar" submit="submit"/>
            </div>
          </div>
      </>
    );
  }
  
  export default Form;