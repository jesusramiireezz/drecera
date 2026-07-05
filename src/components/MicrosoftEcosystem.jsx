import React, { useEffect, useState } from 'react';

const capabilities = [
  ['Business Central', 'Desarrollo, extensiones e integración con procesos de negocio.', true],
  ['Power Automate', 'Automatización de tareas, aprobaciones, avisos y flujos operativos.', true],
  ['APIs e integraciones', 'Conexión entre plataformas, servicios externos y software propio.', false],
  ['ERP y CRM', 'Datos comerciales, financieros y operativos dentro de un mismo flujo.', false],
  ['Datos y BI', 'Modelos, reporting y visibilidad para tomar decisiones con menos pasos.', false],
  ['Aplicaciones internas', 'Herramientas a medida para equipos, operaciones y procesos concretos.', false],
  ['IA aplicada', 'Clasificación, extracción, revisión y tratamiento de información dentro del proceso.', false],
];

const defaultDescription = 'Especialidad en Microsoft, criterio de desarrollo y capacidad para integrar las herramientas que ya forman parte del trabajo.';

function MicrosoftEcosystem() {
  const [activeDescription, setActiveDescription] = useState(defaultDescription);
  const [activeName, setActiveName] = useState('');
  const [visibleDescription, setVisibleDescription] = useState(defaultDescription);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (activeDescription === visibleDescription) return undefined;

    setIsChanging(true);
    const fadeOut = window.setTimeout(() => {
      setVisibleDescription(activeDescription);
      setIsChanging(false);
    }, 90);

    return () => window.clearTimeout(fadeOut);
  }, [activeDescription, visibleDescription]);

  const activate = (name, description) => {
    setActiveName(name);
    setActiveDescription(description);
  };

  const reset = () => {
    setActiveName('');
    setActiveDescription(defaultDescription);
  };

  return (
    <section className="microsoft-section" id="capacidades" aria-labelledby="capabilities-title">
      <div className="sequence-container microsoft__inner">
        <div data-reveal>
          <p className="section-label">Capacidades</p>
          <h2 id="capabilities-title">Lo que conectamos para que el trabajo avance.</h2>
          <p
            id="capabilities-description"
            className={isChanging ? 'microsoft__description is-changing' : 'microsoft__description'}
          >
            {visibleDescription}
          </p>
        </div>
        <div
          className={activeName ? 'microsoft-list has-active' : 'microsoft-list'}
          onPointerLeave={(event) => {
            if (event.pointerType === 'mouse') reset();
          }}
        >
          {capabilities.map(([name, description, isPrimary]) => (
            <button
              className={[
                'microsoft-item',
                isPrimary ? 'microsoft-item--primary' : '',
                activeName === name ? 'is-active' : '',
              ].filter(Boolean).join(' ')}
              key={name}
              type="button"
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') activate(name, description);
              }}
              onFocus={() => activate(name, description)}
              onClick={() => activate(name, description)}
              aria-describedby="capabilities-description"
            >
              <strong>{name}</strong>
              <span>{description}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MicrosoftEcosystem;
