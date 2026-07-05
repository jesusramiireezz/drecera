import React, { useEffect } from 'react';

function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      root.style.setProperty('--scroll-progress', `${progress}`);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  return (
    <div className="motion-layer" aria-hidden="true">
      <span className="scroll-progress" />
    </div>
  );
}

export default MotionLayer;
