import React from 'react';

const steps = [
  ['01', 'Entender', 'Vemos cómo se trabaja ahora y dónde se pierde tiempo.'],
  ['02', 'Simplificar', 'Quitamos pasos, duplicidades y decisiones innecesarias.'],
  ['03', 'Conectar', 'Integramos las herramientas que ya forman parte del negocio.'],
  ['04', 'Automatizar', 'Construimos el flujo y medimos si realmente mejora el proceso.'],
];

function HowWeWork() {
  return (
    <section className="approach" id="metodo" aria-labelledby="approach-title">
      <div className="sequence-container approach__inner">
        <div className="approach__sticky" data-reveal>
          <p className="section-label">Método</p>
          <h2 id="approach-title">Menos pasos antes de escribir una línea de solución.</h2>
        </div>
        <div className="approach__steps">
          {steps.map(([number, title, text], index) => (
            <article
              className="approach-step"
              key={number}
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
