import React, { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const links = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Capacidades', href: '/#capacidades' },
  { label: 'Método', href: '/#metodo' },
  { label: 'Drecera', href: '/#nosotros' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={scrolled ? 'navbar navbar--scrolled' : 'navbar'} id="top">
      <nav className="navbar__inner" aria-label="Navegación principal">
        <Logo />
        <div className="navbar__links" aria-label="Secciones">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="/contacto">
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
