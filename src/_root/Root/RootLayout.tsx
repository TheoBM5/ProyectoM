import {LeftSide} from '../../components/LeftSide/LeftSide'
import CardTopic from '../../components/CardTopic/CardTopic'
import {Button}  from '../../components/Buttons/Button'
import '../Root/Root.css'

const RootLayout = () => {
  return (
    <>
      <nav>
        <LeftSide />
      </nav>
      <div className='deck'>
        <CardTopic />
        <CardTopic />
      </div>
      <div>
        <a href="/sign-in">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="logout">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
        </svg>
        </a>
      </div>
    </>
  )
}

export default RootLayout