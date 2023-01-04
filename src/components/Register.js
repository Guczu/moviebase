import React from 'react'

export default function Register() {
  return (
    <div className='login--container'>
        <div className='login--form'>
            Login: <input type="text"></input>
            Nazwa: <input type="text"></input>
            Email: <input type="text"></input>
            Hasło: <input type="text"></input>
            <button>Zarejestruj</button>
        </div>
    </div>
  )
}
