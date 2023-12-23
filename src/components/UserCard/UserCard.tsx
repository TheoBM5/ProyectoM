import './UserCard.css'; 

export function UserCard() {
  return (
    <article className='user-Card'>
        <header className='user-Card-header'>
            <img  
            className='profile-image'
            alt='Imagen del usuario'
            src={'https://unavatar.io/youtube/TheoBM_5'}
            />
        <div className='user-info'>
            <strong>TheoBm5</strong>
            <span className='user-card-info'>teodorohugo5@gmail.com</span>
        </div>
        </header>
    </article>
  )
}

export default UserCard