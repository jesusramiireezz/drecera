import React from 'react';

function HeroDefinition() {
  return (
    <div className="hero__definition" aria-label="Definición de drecera" data-reveal style={{ '--reveal-delay': '420ms' }}>
      <strong>drecera</strong>
      <span>/dɾəˈseɾə/ · f.</span>
      <p>
        Camino más corto
        <br />
        para llegar a un lugar.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__ghost" aria-hidden="true">DRECERA</p>
      <h1 id="hero-title" className="hero__headline" aria-label="Hay una forma más directa de trabajar.">
        <span className="headline-mask headline-mask--one" data-reveal style={{ '--reveal-delay': '120ms' }}>
          <span>El trabajo</span>
        </span>
        <span className="headline-mask headline-mask--two" data-reveal style={{ '--reveal-delay': '220ms' }}>
          <span>no debería</span>
        </span>
        <span className="headline-mask headline-mask--three" data-reveal style={{ '--reveal-delay': '320ms' }}>
          <span>dar tantas vueltas.</span>
        </span>
      </h1>
      <HeroDefinition />
      <div className="hero__bottom" data-reveal style={{ '--reveal-delay': '520ms' }}>
        <p>
          Reducimos pasos, conectamos sistemas y automatizamos procesos para que tu empresa
          trabaje de forma más directa.
        </p>
      </div>
    </section>
  );
}

export default Hero;
