import React from 'react'
import './Header.css'

export default function Header() {

   return(
      <header className='header_group'>
          <div className='header_main'>
              <nav className='content_menu'>
                <ul className='menu-header'>
                    <li><a href="#">Nacional</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Internacional</a></li>
                    <li><a href="#">Saúde</a></li>
                    <li><a href="#">Tecnologia</a></li>
                    <li><a href="#">Esporte</a></li>
                    <li><a href="#">Entretenimento</a></li>
                    <li><a href="#">Estilo</a></li>
                    <li><a href="#">Viagem & Gastronomia</a></li>
                    <li><a href="#">Newsletters</a></li>
                    <li><a href="#">Podcasts</a></li>
                </ul>
            </nav>
          </div>
      </header>
)}
