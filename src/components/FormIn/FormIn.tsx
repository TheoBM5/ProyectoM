import {Button} from '../Buttons/Button';
import '../FormIn/FormIn.css'

function FormIn() {
  return (
    <>
    <div className='cardIn'>
        <h3 className='titleIn'>Iniciar sesion</h3>
        <form>
            {/* <label htmlFor="email">Email: </label> */}
            <input className="inputIn" placeholder='Email' type="email" name="email" required />
            <br />
            {/* <label htmlFor="password">Password: </label> */}
            <input className="inputIn" placeholder='Contrasena' type="password" name="password" required />
            <br />
        </form>
        <div className='button-conteiner2'>
          <Button type="" text="Iniciar" submit="submit"/>
        </div>
        <div className='sub-password'>
            <a href='/'>¿Olvidaste tu contraseña?</a>
        </div>
    </div>
    </>
  )
}
export default FormIn