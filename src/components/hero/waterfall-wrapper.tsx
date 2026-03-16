/* Wrapper that positions the waterfall canvas between hero subtitle and "How It Works" heading.
   Uses ResizeObserver to dynamically measure element positions for responsive accuracy.
   Background gradient lives here. Canvas overlays content (pointer-events-none).
   Children sections must use bg-transparent so waterfall shows through */
'use client';

import { useEffect, useRef, useState } from 'react';
import { WaterfallCanvas } from './waterfall-canvas';

export function WaterfallWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canvasStyle, setCanvasStyle] = useState({ top: '30%', height: '70%' });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const measure = () => {
      const startEl = wrapper.querySelector('[data-waterfall-start]');
      const endEl = wrapper.querySelector('[data-waterfall-end]');
      if (!startEl || !endEl) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const startBottom = startEl.getBoundingClientRect().bottom - wrapperRect.top;
      const endTop = endEl.getBoundingClientRect().top - wrapperRect.top;

      setCanvasStyle({
        top: `${startBottom}px`,
        height: `${Math.max(0, endTop - startBottom)}px`,
      });
    };

    /* Measure after fonts/layout settle */
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #19150D 0%, #1C241C 14.73%, #1C241C 100%)' }}
    >
      {/* Section content renders first */}
      <div className="relative">
        {children}
      </div>
      {/* Canvas overlays — constrained to 1080px centered */}
      <div
        className="pointer-events-none absolute inset-x-0 z-20 flex justify-center"
        style={{ top: canvasStyle.top, height: canvasStyle.height }}
      >
        <div className="relative w-full max-w-[1080px]">
          <WaterfallCanvas />
        </div>
      </div>
    </div>
  );
}
