import React from 'react';

function Logo({ compact = false }) {
  return (
    <a className={compact ? 'logo logo--compact' : 'logo'} href="/" aria-label="DRECERA inicio">
      <svg className="logo__wordmark" viewBox="0 0 190 36" role="img" aria-label="DRECERA">
        <text className="logo__wordmark-text" x="0" y="26">DRECERA</text>
      </svg>
    </a>
  );
}

export default Logo;
