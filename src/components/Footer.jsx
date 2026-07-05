import React from 'react';
import Logo from './Logo.jsx';

function Footer() {
  return (
    <footer className="site-footer" id="nosotros">
      <div className="site-footer__inner">
        <div className="site-footer__bottom">
          <Logo compact />
          <nav aria-label="Navegación de pie">
            <a href="/#servicios">Servicios</a>
            <a href="/#capacidades">Capacidades</a>
            <a href="/#metodo">Método</a>
            <a href="/contacto">Contacto</a>
          </nav>
          <div className="site-footer__legal">
            <span>© 2026 Drecera</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
