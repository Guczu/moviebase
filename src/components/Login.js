import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login--container'>
        <div className='login--form'>
            Login: <input type="text"></input>
            Hasło: <input type="text"></input>
            <button>Zaloguj</button>
            <p>Nie masz konta?</p>
            <Link to="/register">Zarejestruj sie</Link>
        </div>
    </div>
  )
}
