

function FormIn() {
  return (
    <>
        <h3>Iniciar sesion</h3>
        <span>Para usar la aplicacion es necesario registrarse</span>
        <form>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" required />
            <br />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" required />
            <br />
        </form>
    </>
  )
}

export default FormIn