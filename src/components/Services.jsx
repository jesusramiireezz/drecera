import React from 'react';

const services = [
  {
    number: '01',
    title: 'Automatización de procesos',
    text: 'Quitamos tareas repetitivas y convertimos procesos manuales en flujos claros y trazables.',
  },
  {
    number: '02',
    title: 'Integraciones entre sistemas',
    text: 'Conectamos herramientas para que la información avance sin copiar, pegar ni perseguir datos.',
  },
  {
    number: '03',
    title: 'IA aplicada a procesos',
    text: 'Aplicamos IA donde puede clasificar, extraer, resumir o ayudar a tomar decisiones.',
  },
  {
    number: '04',
    title: 'Soluciones internas a medida',
    text: 'Creamos herramientas concretas para procesos que no encajan en un software genérico.',
  },
];

function Services() {
  return (
    <section className="services-section" id="servicios" aria-labelledby="services-title">
      <div className="sequence-container">
        <p className="section-label" id="services-title" data-reveal>Servicios</p>
        <div className="service-list" role="list">
          {services.map((service, index) => (
            <article
              className="service-row"
              key={service.number}
              role="listitem"
              tabIndex={0}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="service-row__number">{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
