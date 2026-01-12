import { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathProps {
  children: string;
  display?: boolean;
}

export function Math({ children, display = false }: MathProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      katex.render(children, containerRef.current, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    }
  }, [children, display]);

  return display ? (
    <div className="math-block">
      <span ref={containerRef} />
    </div>
  ) : (
    <span ref={containerRef} />
  );
}
