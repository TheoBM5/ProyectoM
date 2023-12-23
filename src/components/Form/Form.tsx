import './Form.css';
import '../Buttons/Button'
// import { Button } from '../Buttons/Button';
export function Form() {
    return (
      <>
          <h3>Registro</h3>
          <span>Para usar la aplicacion es necesario registrarse</span>
          <form>
              <label htmlFor="firstname">First name: </label>
              <input type="text" name="firstname" required />
              <br />
              <label htmlFor="lastname">Last name: </label>
              <input type="text" name="lastname" required />
              <br />
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" required />
              <br />
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" required />
              <br />

          </form>
      </>
    );
  }
  
  export default Form;