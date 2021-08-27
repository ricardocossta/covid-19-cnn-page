import React from 'react'
import './Main2.css'
import logo from '../img/logo.svg'

export default function Main2() {

   return(
      <div className='post_content'>
          <div className='container-logo'>
            <img className='logo' src={logo} alt="Logo da CNN Brasil" />
          </div>
          <p>Por ser uma doença nova, a Covid-19 ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
          <p>A variante Delta da Covid-19, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
      </div>
)}