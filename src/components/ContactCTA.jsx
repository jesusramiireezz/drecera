import React from 'react';

function ContactCTA() {
  return (
    <section className="contact-cta" id="contacto" aria-labelledby="contact-title">
      <div className="contact-cta__inner" data-reveal>
        <p className="contact-cta__label">
          HABLEMOS
        </p>
        <div className="contact-cta__grid">
          <h2 id="contact-title">¿Qué proceso quieres simplificar?</h2>
          <div>
            <p>
              Cuéntanos dónde se atasca el trabajo.
              <br />
              Buscamos una forma más directa de resolverlo.
            </p>
            <a className="contact-cta__link action-link" href="/contacto">
              <span>PONTE EN CONTACTO</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
