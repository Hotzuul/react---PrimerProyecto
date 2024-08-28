import React from 'react'
import logo from './img/logo.png'
import './css/style.css'


export const Footer = () => {
  return (
    <footer>
        <div className='container'>
        <section>
            <img src={logo} alt='logo'/>
            <div className='socials'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='fa-brands fa-instagram'
              aria-label='Instagram'
            ></a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='fa-brands fa-facebook'
              aria-label='Facebook'
            ></a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='fa-brands fa-linkedin'
              aria-label='LinkedIn'
            ></a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='fa-brands fa-youtube'
              aria-label='YouTube'
            ></a>
            <a
              href='https://tiktok.com'
              target='_blank'
              rel='noopener noreferrer'
              className='fa-brands fa-tiktok'
              aria-label='TikTok'
            ></a>
            </div>
        </section>
        </div>
    </footer>
  )
}
