import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
           <h1 className="footer__title">Rohit</h1>

           <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
           </ul>

           <div className="footer__social">
            <a href="https://www.instagram.com/inasync_" className="footer__social-link" target='_blank'>
            <i class = "uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/rohitna" className="footer__social-link" target='_blank'>
            <i class = "uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/Inasync-io" className="footer__social-link" target='_blank'>
            <i class = "uil uil-github-alt"></i>
            </a>

            <a href="https://www.behance.net/nrogith" className="footer__social-link" target='_blank'>
            <i class = "uil uil-behance"></i>
            </a>
           </div>

           <span className="footer__copy">&#169; Inasync. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer