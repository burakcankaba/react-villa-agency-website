import React from 'react'
import "./whatsapp.scss"
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const Whatsapp = () => {
  const [openWhatsapp, setOpenWhatsapp] = useState(false)
  const wpText = "Çoklu dil test mesajıdır"
  return (
    <div className='whatsappFixed'>

      {
        <div className={`whatsapp_wrap ${openWhatsapp ? "openWpContent":""}`}>
          <div className='ww_title'>Customer Representatives</div>
          <div className='ww_body'>
            
          <a href={`https://wa.me/905310822745?text=${wpText}`} target="_blank" rel="noreferrer">
              <img src={`/flag/tr.png`} alt="" />
              <div>Alara</div>
            </a>
            <a href={`https://wa.me/905310822752?text=${wpText}`} target="_blank" rel="noreferrer">
              <img src={`/flag/en.png`} alt="" />
              <div>Oumayma</div>
            </a>
            
            <a href={`https://wa.me/905310822752?text=${wpText}`} target="_blank" rel="noreferrer">
              <img src={`/flag/ar.png`} alt="" />
              <div>أميمة</div>
            </a>
          </div>
        </div>}

      <div className='whatsappBtn' onClick={() => setOpenWhatsapp(!openWhatsapp)}>
        <FaWhatsapp />
      </div>

    </div>
  )
}

export default Whatsapp