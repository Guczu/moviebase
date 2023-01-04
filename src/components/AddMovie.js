import React from 'react'

export default function AddMovie() {
  return (
    <div className='login--container'>
        <div className='login--form'>
            Nazwa filmu: <input type="text"></input>
            Opis filmu: <input type="text"></input>
            Rok produkcji: <input type="text"></input>
            Gatunek: <input type="text"></input>
            Reżyser: <input type="text"></input>
            Url do zdjecia: <input type="text"></input>
            <button>Dodaj film</button>
        </div>
    </div>
  )
}
