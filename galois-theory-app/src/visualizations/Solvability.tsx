import { useState } from 'react';
import { motion } from 'framer-motion';

export function SolvabilityVisualization() {
  const [degree, setDegree] = useState(2);

  const degreeInfo = [
    {
      degree: 1,
      formula: 'x = -b/a',
      example: 'ax + b = 0',
      solved: 'Antiquity',
      solvable: true,
      galoisGroup: 'Trivial {e}',
      explanation: 'Linear equations are trivial to solve',
    },
    {
      degree: 2,
      formula: 'x = (-b ± √(b²-4ac)) / 2a',
      example: 'ax² + bx + c = 0',
      solved: '~2000 BCE (Babylon)',
      solvable: true,
      galoisGroup: 'S₂ ≅ Z₂',
      explanation: 'The quadratic formula uses one square root',
    },
    {
      degree: 3,
      formula: 'Cardano\'s formula (complex!)',
      example: 'x³ + px + q = 0',
      solved: '1545 (Cardano)',
      solvable: true,
      galoisGroup: 'S₃ (solvable)',
      explanation: 'Uses cube roots and square roots',
    },
    {
      degree: 4,
      formula: 'Ferrari\'s method',
      example: 'x⁴ + ax³ + bx² + cx + d = 0',
      solved: '1545 (Ferrari)',
      solvable: true,
      galoisGroup: 'S₄ (solvable)',
      explanation: 'Reduces to solving cubics',
    },
    {
      degree: 5,
      formula: 'NO GENERAL FORMULA!',
      example: 'x⁵ - 4x + 2 = 0',
      solved: 'Proven impossible (1824)',
      solvable: false,
      galoisGroup: 'S₅ (NOT solvable)',
      explanation: 'A₅ is simple non-abelian, blocking the tower',
    },
  ];

  const info = degreeInfo[degree - 1];

  return (
    <div className="visual-container">
      <div className="visual-title">Interactive: Solvability by Radicals</div>

      <div className="demo-controls">
        {[1, 2, 3, 4, 5].map((d) => (
          <button
            key={d}
            className={`demo-btn ${degree === d ? 'active' : ''}`}
            onClick={() => setDegree(d)}
            style={{
              background: degree === d
                ? d <= 4
                  ? 'var(--color-success)'
                  : 'var(--color-error)'
                : undefined,
            }}
          >
            Degree {d}
          </button>
        ))}
      </div>

      <div className="svg-container" style={{ minHeight: '250px' }}>
        <svg viewBox="0 0 500 250" width="500" height="250">
          {/* Timeline base */}
          <line
            x1="50"
            y1="180"
            x2="450"
            y2="180"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
          />

          {/* Degree markers */}
          {[1, 2, 3, 4, 5].map((d, i) => {
            const x = 90 + i * 80;
            const isSelected = d === degree;
            const isSolvable = d <= 4;

            return (
              <motion.g
                key={d}
                animate={{
                  scale: isSelected ? 1.2 : 1,
                }}
              >
                {/* Marker */}
                <circle
                  cx={x}
                  cy="180"
                  r={isSelected ? 20 : 15}
                  fill={
                    isSelected
                      ? isSolvable
                        ? '#10b981'
                        : '#ef4444'
                      : 'rgba(255,255,255,0.1)'
                  }
                  stroke={isSolvable ? '#10b981' : '#ef4444'}
                  strokeWidth="2"
                />

                {/* Degree number */}
                <text
                  x={x}
                  y="185"
                  fill={isSelected ? '#0a0f1e' : '#fff'}
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {d}
                </text>

                {/* Status icon */}
                <text
                  x={x}
                  y="215"
                  fill={isSolvable ? '#10b981' : '#ef4444'}
                  fontSize="18"
                  textAnchor="middle"
                >
                  {isSolvable ? '✓' : '✗'}
                </text>
              </motion.g>
            );
          })}

          {/* Info display */}
          <motion.g
            key={degree}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Status badge */}
            <rect
              x="150"
              y="30"
              width="200"
              height="30"
              rx="15"
              fill={info.solvable ? '#10b981' : '#ef4444'}
            />
            <text
              x="250"
              y="50"
              fill="#0a0f1e"
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
            >
              {info.solvable ? 'SOLVABLE BY RADICALS' : 'NOT SOLVABLE'}
            </text>

            {/* Details */}
            <text x="250" y="90" fill="#fff" fontSize="13" textAnchor="middle">
              Example: {info.example}
            </text>
            <text x="250" y="115" fill="#fbbf24" fontSize="12" textAnchor="middle">
              Galois Group: {info.galoisGroup}
            </text>
            <text x="250" y="140" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">
              Discovered: {info.solved}
            </text>
          </motion.g>
        </svg>
      </div>

      <motion.div
        key={degree}
        className={`callout ${info.solvable ? 'callout-concept' : 'callout-discovery'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="callout-title">
          {info.solvable ? 'Formula exists!' : 'Why no formula?'}
        </div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
          <strong>Formula: </strong>
          <code style={{ background: 'rgba(0,0,0,0.2)', padding: '2px 6px', borderRadius: '4px' }}>
            {info.formula}
          </code>
        </p>
        <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
          {info.explanation}
        </p>
      </motion.div>
    </div>
  );
}
