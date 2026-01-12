import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function SymmetryGroupVisualization() {
  const [shape, setShape] = useState<'triangle' | 'square' | 'pentagon'>('triangle');
  const [rotation, setRotation] = useState(0);
  const [isReflected, setIsReflected] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);

  const shapeConfig = {
    triangle: { sides: 3, rotationStep: 120, color: '#f59e0b' },
    square: { sides: 4, rotationStep: 90, color: '#6366f1' },
    pentagon: { sides: 5, rotationStep: 72, color: '#10b981' },
  };

  const config = shapeConfig[shape];

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setRotation((r) => (r + config.rotationStep) % 360);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [autoRotate, config.rotationStep]);

  const getPolygonPoints = (sides: number, radius: number, cx: number, cy: number) => {
    const points = [];
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
      points.push({
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
      });
    }
    return points;
  };

  const points = getPolygonPoints(config.sides, 80, 200, 150);
  const pointsString = points.map((p) => `${p.x},${p.y}`).join(' ');

  const rotateShape = () => {
    setRotation((r) => (r + config.rotationStep) % 360);
  };

  const reflectShape = () => {
    setIsReflected(!isReflected);
  };

  return (
    <div className="visual-container">
      <div className="visual-title">Interactive: Symmetry Groups</div>

      <div className="demo-controls">
        {(['triangle', 'square', 'pentagon'] as const).map((s) => (
          <button
            key={s}
            className={`demo-btn ${shape === s ? 'active' : ''}`}
            onClick={() => {
              setShape(s);
              setRotation(0);
              setIsReflected(false);
            }}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      <div className="svg-container">
        <svg viewBox="0 0 400 300" width="400" height="300">
          {/* Background circle showing symmetry */}
          <circle
            cx="200"
            cy="150"
            r="85"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />

          {/* Symmetry axes */}
          {Array.from({ length: config.sides }).map((_, i) => {
            const angle = (i * Math.PI) / config.sides - Math.PI / 2;
            return (
              <line
                key={i}
                x1={200 + 100 * Math.cos(angle)}
                y1={150 + 100 * Math.sin(angle)}
                x2={200 - 100 * Math.cos(angle)}
                y2={150 - 100 * Math.sin(angle)}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            );
          })}

          {/* The shape */}
          <motion.g
            animate={{
              rotate: rotation,
              scaleX: isReflected ? -1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            style={{ originX: '200px', originY: '150px', transformOrigin: '200px 150px' }}
          >
            <polygon
              points={pointsString}
              fill={`${config.color}20`}
              stroke={config.color}
              strokeWidth="3"
            />

            {/* Vertex labels */}
            {points.map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="12" fill={config.color} />
                <text
                  x={p.x}
                  y={p.y + 4}
                  fill="#0a0f1e"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {i + 1}
                </text>
              </g>
            ))}
          </motion.g>

          {/* Labels */}
          <text x="200" y="270" fill="rgba(255,255,255,0.7)" fontSize="13" textAnchor="middle">
            Rotation: {rotation}° | Reflected: {isReflected ? 'Yes' : 'No'}
          </text>
        </svg>
      </div>

      <div className="demo-controls" style={{ justifyContent: 'center', marginTop: '1rem' }}>
        <button className="demo-btn" onClick={rotateShape}>
          Rotate {config.rotationStep}°
        </button>
        <button className="demo-btn" onClick={reflectShape}>
          Reflect
        </button>
        <button
          className={`demo-btn ${autoRotate ? 'active' : ''}`}
          onClick={() => setAutoRotate(!autoRotate)}
        >
          Auto Rotate
        </button>
      </div>

      <div className="callout callout-concept" style={{ marginTop: '1rem' }}>
        <div className="callout-title">Group Structure</div>
        <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
          The <strong>{shape}</strong> has <strong>{config.sides}</strong> rotational symmetries and{' '}
          <strong>{config.sides}</strong> reflections, giving <strong>{config.sides * 2}</strong> total
          symmetries. This forms the dihedral group D<sub>{config.sides}</sub>.
        </p>
      </div>
    </div>
  );
}
