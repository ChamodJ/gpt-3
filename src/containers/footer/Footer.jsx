import React from 'react'

import './footer.css'

import gpt3logo from '../../Assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3_footer section_padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient_text'>Do you want to step in to the future before others</h1>
      </div>

      <div className='gpt3_footer-button'>
        <button type='button'>Request Early Access</button>
      </div>

      <div className='gpt3_footer-container'>
        <div className='gpt3_footer-container-logo'>
          <img src={gpt3logo} alt='GPTLogo'/>

          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        <div className='gpt3_footer-container-div'>
          <h4>Links</h4>
          <p><a href='#'>Overons</a></p>
          <p><a href='#'>Social Media</a></p>
          <p><a href='#'>Counters</a></p>
          <p><a href='#'>Contact</a></p>
        </div>

        <div className='gpt3_footer-container-div'>
          <h4>Company</h4>
          <p><a href='#'>Terms & Conditions</a></p>
          <p><a href='#'>Privacy Policy Media</a></p>
          <p><a href='#'>Contact</a></p>
        </div>

        <div className='gpt3_footer-container-div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3_footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>

    </div>
  )
}

export default Footer