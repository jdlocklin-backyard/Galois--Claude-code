import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function PolynomialRootsVisualization() {
  const [polynomial, setPolynomial] = useState<'quadratic' | 'cubic' | 'quartic'>('quadratic');
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const roots = {
    quadratic: [
      { x: -2, y: 0, label: '-2' },
      { x: 2, y: 0, label: '2' },
    ],
    cubic: [
      { x: -1.5, y: 0, label: 'r₁' },
      { x: 0.75, y: 1.3, label: 'r₂' },
      { x: 0.75, y: -1.3, label: 'r₃' },
    ],
    quartic: [
      { x: -2, y: 0, label: 'r₁' },
      { x: -0.7, y: 0, label: 'r₂' },
      { x: 0.7, y: 0, label: 'r₃' },
      { x: 2, y: 0, label: 'r₄' },
    ],
  };

  const currentRoots = roots[polynomial];
  const scale = 50;
  const centerX = 200;
  const centerY = 150;

  return (
    <div className="visual-container">
      <div className="visual-title">Interactive: Polynomial Roots</div>

      <div className="demo-controls">
        {(['quadratic', 'cubic', 'quartic'] as const).map((p) => (
          <button
            key={p}
            className={`demo-btn ${polynomial === p ? 'active' : ''}`}
            onClick={() => setPolynomial(p)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>

      <div className="svg-container">
        <svg viewBox="0 0 400 300" width="400" height="300">
          {/* Grid */}
          <defs>
            <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />

          {/* Axes */}
          <line x1="0" y1={centerY} x2="400" y2={centerY} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1={centerX} y1="0" x2={centerX} y2="300" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Axis labels */}
          <text x="385" y={centerY - 10} fill="rgba(255,255,255,0.5)" fontSize="12">Re</text>
          <text x={centerX + 10} y="15" fill="rgba(255,255,255,0.5)" fontSize="12">Im</text>

          {/* Polynomial curve (simplified visualization) */}
          {polynomial === 'quadratic' && (
            <motion.path
              d={`M 100 ${centerY + 100} Q 200 ${centerY - 100} 300 ${centerY + 100}`}
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          )}

          {/* Roots */}
          {currentRoots.map((root, i) => {
            const cx = centerX + root.x * scale;
            const cy = centerY - root.y * scale;
            const pulseScale = 1 + 0.1 * Math.sin((animationStep + i * 25) * 0.1);

            return (
              <g key={i}>
                {/* Glow effect */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={12 * pulseScale}
                  fill="rgba(251, 191, 36, 0.2)"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                />
                {/* Root point */}
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={6}
                  fill="#fbbf24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2, type: 'spring' }}
                />
                {/* Label */}
                <motion.text
                  x={cx}
                  y={cy - 15}
                  fill="#fbbf24"
                  fontSize="12"
                  textAnchor="middle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {root.label}
                </motion.text>
              </g>
            );
          })}

          {/* Title */}
          <text x="200" y="280" fill="rgba(255,255,255,0.7)" fontSize="14" textAnchor="middle">
            {polynomial === 'quadratic' && 'x² - 4 = 0 has 2 real roots'}
            {polynomial === 'cubic' && 'x³ - 2 = 0 has 1 real, 2 complex roots'}
            {polynomial === 'quartic' && 'x⁴ - 5x² + 4 = 0 has 4 real roots'}
          </text>
        </svg>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', marginTop: '1rem' }}>
        The <span style={{ color: 'var(--color-gold-400)' }}>gold dots</span> show where the polynomial equals zero.
        These are the "roots" we're trying to find formulas for.
      </p>
    </div>
  );
}
