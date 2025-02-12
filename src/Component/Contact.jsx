import React from 'react'
import "../Css/Contact.css"
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const Contact = () => {
  
  return (
    <div  className="cover-contact" id='Contact'>
      <h1>Get <span class="highlight">In</span>Touch</h1>
    <div className='contact'>
      <div className='contact-pic'><img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1739045921/05b80e0a-5eec-4061-9c1d-73690719e649_bqqc7g.png" alt="contact-pic" /></div>
      <div className='contact-details'>
        <div className='contact-box'>
          <a href='https://www.linkedin.com/in/surya-kiran-majhi/' className='contact-sbox link'>
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
          <a href='https://www.instagram.com/ek_tha_surya0.2/' className='contact-sbox inst'>
            <FaInstagram />
            <p>Instagram</p>
          </a>
          <a href='https://github.com/Ekthasurya' className='contact-sbox git'>
            <FaGithub />
            <p>Github</p>
          </a>
          <a href='https://x.com/EkThaSurya' className='contact-sbox tw'>
            <FaXTwitter />
            <p>Twitter</p>
          </a>
          <a href="mailto:suryakiranmajhi1999@gmail.com" className="contact-sbox mail">
            <IoMdMail />
            <p>Mail</p>
          </a>
          <a href="https://wa.me/7679426172" target="_blank" rel="noopener noreferrer" className="contact-sbox wp">
            <FaWhatsapp />
            <p>WA</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact