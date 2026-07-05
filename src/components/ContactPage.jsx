import React from 'react';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || '';
const hasSentMessage = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('enviado') === '1';

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-page__inner" aria-labelledby="contact-page-title">
        <div data-reveal>
          <p className="section-label">Contacto</p>
          <h1 id="contact-page-title">Cuéntanos qué quieres simplificar.</h1>
          <p>
            Cuéntanos dónde se atasca el trabajo.
            Te responderemos con una forma concreta de empezar a simplificarlo.
          </p>
        </div>

        <div data-reveal style={{ '--reveal-delay': '120ms' }}>
          {hasSentMessage ? (
            <div className="contact-success" role="status">
              <strong>Mensaje enviado.</strong>
              <p>Te responderemos lo antes posible.</p>
              <a className="contact-success__link" href="/">
                Volver a DRECERA →
              </a>
            </div>
          ) : (
            <form
              className="contact-form"
              action={CONTACT_EMAIL ? `https://formsubmit.co/${CONTACT_EMAIL}` : '#'}
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nuevo contacto desde DRECERA" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contacto?enviado=1` : '/contacto?enviado=1'} />

              <label>
                <span>Nombre</span>
                <input name="nombre" type="text" autoComplete="name" placeholder=" " required />
                <small>Error — dinos tu nombre.</small>
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder=" " required />
                <small>Error — necesitamos un email válido.</small>
              </label>
              <label>
                <span>Asunto</span>
                <input name="asunto" type="text" placeholder=" " required />
                <small>Error — añade un asunto breve.</small>
              </label>
              <label>
                <span>Mensaje</span>
                <textarea name="mensaje" rows="5" placeholder=" " required />
                <small>Error — cuéntanos un poco el contexto.</small>
              </label>

              <button type="submit">
                <span>ENVIAR MENSAJE</span>
                <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
