import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <section className="contact section "id='contact'>
        <h2 className="section__title">Entre em contato</h2>
        <span className="section__subtitle">Contate-me</span>

        <div className="contact__container container">
            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">joaopauloreis-santos@hotmail.com</span>

                    <a href="" className="contact__button">
                        Mande um Email
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
                <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">79 9 9870-2361</span>

                            <a href="https://wa.me/5579998702361?text=Ol%C3%A1,%20vi%20seu%20portif%C3%B3lio%20e%20gostaria%20de%20bater%20um%20papo%20com%20voc%C3%AA!" className="contact__button">
                                Envie uma mensagem
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                </div>

                <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">joaopaulo_rs19</span>

                        <a href="https://www.instagram.com/joaopaulo_rs19/" className="contact__button">
                            Direct
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                </div>
            </div>

                    
        </div>
    </section>
  )
}

export default Contact