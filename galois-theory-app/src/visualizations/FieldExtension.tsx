import { useState } from 'react';
import { motion } from 'framer-motion';

export function FieldExtensionVisualization() {
  const [selectedField, setSelectedField] = useState(0);

  const fields = [
    { name: 'Natural Numbers (N)', color: '#ef4444', elements: '1, 2, 3, 4, 5...', description: 'Counting numbers' },
    { name: 'Integers (Z)', color: '#f59e0b', elements: '...-2, -1, 0, 1, 2...', description: 'Add negatives and zero' },
    { name: 'Rationals (Q)', color: '#10b981', elements: '1/2, -3/4, 5, 0.25...', description: 'Add all fractions' },
    { name: 'Q(√2)', color: '#6366f1', elements: 'a + b√2', description: 'Add √2' },
    { name: 'Reals (R)', color: '#8b5cf6', elements: 'π, e, √2, all decimals', description: 'All real numbers' },
    { name: 'Complex (C)', color: '#ec4899', elements: 'a + bi', description: 'Add i = √(-1)' },
  ];

  return (
    <div className="visual-container">
      <div className="visual-title">Interactive: Field Extensions Tower</div>

      <div className="svg-container" style={{ minHeight: '400px' }}>
        <svg viewBox="0 0 500 400" width="500" height="400">
          {/* Tower of fields */}
          {fields.map((field, i) => {
            const y = 350 - i * 55;
            const width = 120 + i * 40;
            const x = 250 - width / 2;
            const isSelected = selectedField === i;

            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedField(i)}
              >
                {/* Field box */}
                <motion.rect
                  x={x}
                  y={y}
                  width={width}
                  height={45}
                  rx="8"
                  fill={isSelected ? field.color : 'rgba(255,255,255,0.05)'}
                  stroke={field.color}
                  strokeWidth={isSelected ? 3 : 1.5}
                  animate={{
                    scale: isSelected ? 1.02 : 1,
                  }}
                />

                {/* Field name */}
                <text
                  x={250}
                  y={y + 28}
                  fill={isSelected ? '#0a0f1e' : '#fff'}
                  fontSize="14"
                  fontWeight="600"
                  textAnchor="middle"
                >
                  {field.name}
                </text>

                {/* Subset arrow */}
                {i > 0 && (
                  <motion.path
                    d={`M 250 ${y + 45} L 250 ${y + 55}`}
                    stroke={fields[i - 1].color}
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: i * 0.15 + 0.1 }}
                  />
                )}
              </motion.g>
            );
          })}

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
            </marker>
          </defs>

          {/* Info panel */}
          <motion.g
            key={selectedField}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <rect
              x="320"
              y="100"
              width="170"
              height="120"
              rx="8"
              fill="rgba(255,255,255,0.05)"
              stroke={fields[selectedField].color}
              strokeWidth="1"
            />
            <text x="330" y="125" fill={fields[selectedField].color} fontSize="12" fontWeight="600">
              {fields[selectedField].name}
            </text>
            <text x="330" y="150" fill="#9ca3af" fontSize="11">
              Elements:
            </text>
            <text x="330" y="170" fill="#fff" fontSize="12">
              {fields[selectedField].elements}
            </text>
            <text x="330" y="200" fill="#9ca3af" fontSize="11">
              {fields[selectedField].description}
            </text>
          </motion.g>

          {/* "Subset of" label */}
          <text x="15" y="200" fill="rgba(255,255,255,0.5)" fontSize="11" transform="rotate(-90, 15, 200)">
            Each field contains all fields below it
          </text>
        </svg>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', marginTop: '1rem' }}>
        Click on each level to see details. Each "extension" adds new numbers while keeping all the old ones.
        This tower structure is key to understanding Galois theory!
      </p>
    </div>
  );
}
