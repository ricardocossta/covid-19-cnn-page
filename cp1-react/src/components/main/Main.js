import React from 'react'
import autor from '../img/author.png'
import './Main.css'


export default function Main() {

   return(
      <div className='container-main'>
          <h1 className='post_title'>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos</h1>
          <hr/>
          <p className='post_excerpt'>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>
          <div className ='author_imagem'>
            <img src={autor} alt="Autor do artigo e estado" />
          </div>
          <hr/>
          <div className='higher_share'>
              <span>24/08/2021 às 16:44 | Atualizado às 16:56</span>
          </div>
      </div>

      
)}