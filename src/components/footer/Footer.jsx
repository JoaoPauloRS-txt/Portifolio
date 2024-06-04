import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">João Paulo</h1>  
        
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>
                <li>
                    <a href="#portifolio" className="footer__link">Projetos</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Habilidades</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/joaopaulo_rs19/" className="footer__social-link" target="_blank">
                <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://x.com/Haru38152149" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-twitter"></i>  
                </a>

                <a href="https://www.linkedin.com/in/joao-paulo-reis-santos-4999831b2/" className="footer__social-link" target='_blank'>
                    <i class="bx bxl-linkedin"></i>  
                </a>
            </div>
            <span className='footer__copy'>&#169; Crypticalcoder. All rigths reserved</span>
        </div>.
    </footer>
  )
}

export default Footer