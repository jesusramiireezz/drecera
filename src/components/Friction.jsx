import React from 'react';

const lines = [
  { text: 'Herramientas sueltas.', align: 'start' },
  { text: 'Datos repetidos.', align: 'center' },
  { text: 'Decisiones lentas.', align: 'end' },
  { text: 'Trabajo duplicado.', align: 'center' },
];

function Friction() {
  return (
    <section className="friction" aria-labelledby="friction-title">
      <div className="friction__inner">
        <h2 id="friction-title" className="sr-only">Problemas habituales</h2>
        <div className="friction__lines" aria-hidden="true">
          {lines.map((line, index) => (
            <p
              className={`friction__line friction__line--${line.align}`}
              style={{
                '--reveal-delay': `${index * 100}ms`,
              }}
              key={line.text}
              data-reveal
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Friction;
