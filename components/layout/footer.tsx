'use client'

import './footer.css'
import { FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-title">Manoel MUN</h3>
                    <p className="footer-desc">Simulação da ONU do Centro de Excelência Manoel Messias Feitosa.</p>
                </div>

                <div className="footer-section">
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="Email"><FaEnvelope /></a>
                        <a href="#" aria-label="Site"><FaGlobe /></a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; {currentYear} Manoel MUN. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}