import { useState } from 'react';
import { motion } from 'framer-motion';

export function GaloisCorrespondenceVisualization() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const fields = [
    { id: 'Q', name: 'Q', x: 200, y: 280, info: 'Rational numbers (base field)' },
    { id: 'Q_sqrt2', name: 'Q(√2)', x: 120, y: 200, info: 'Rationals with √2 added' },
    { id: 'Q_sqrt3', name: 'Q(√3)', x: 200, y: 200, info: 'Rationals with √3 added' },
    { id: 'Q_sqrt6', name: 'Q(√6)', x: 280, y: 200, info: 'Rationals with √6 added' },
    { id: 'Q_sqrt2_sqrt3', name: 'Q(√2,√3)', x: 200, y: 100, info: 'Splitting field - contains all' },
  ];

  const groups = [
    { id: 'V4', name: 'V₄', x: 200, y: 100, order: 4, info: 'Klein four-group (full Galois group)' },
    { id: 'Z2_1', name: '{e,σ₁}', x: 120, y: 200, order: 2, info: 'Fixes Q(√2)' },
    { id: 'Z2_2', name: '{e,σ₂}', x: 200, y: 200, order: 2, info: 'Fixes Q(√3)' },
    { id: 'Z2_3', name: '{e,σ₃}', x: 280, y: 200, order: 2, info: 'Fixes Q(√6)' },
    { id: 'trivial', name: '{e}', x: 200, y: 280, order: 1, info: 'Identity - fixes everything' },
  ];

  const fieldConnections = [
    ['Q', 'Q_sqrt2'],
    ['Q', 'Q_sqrt3'],
    ['Q', 'Q_sqrt6'],
    ['Q_sqrt2', 'Q_sqrt2_sqrt3'],
    ['Q_sqrt3', 'Q_sqrt2_sqrt3'],
    ['Q_sqrt6', 'Q_sqrt2_sqrt3'],
  ];

  const groupConnections = [
    ['trivial', 'Z2_1'],
    ['trivial', 'Z2_2'],
    ['trivial', 'Z2_3'],
    ['Z2_1', 'V4'],
    ['Z2_2', 'V4'],
    ['Z2_3', 'V4'],
  ];

  const correspondences: Record<string, string> = {
    Q: 'V4',
    Q_sqrt2: 'Z2_1',
    Q_sqrt3: 'Z2_2',
    Q_sqrt6: 'Z2_3',
    Q_sqrt2_sqrt3: 'trivial',
    V4: 'Q',
    Z2_1: 'Q_sqrt2',
    Z2_2: 'Q_sqrt3',
    Z2_3: 'Q_sqrt6',
    trivial: 'Q_sqrt2_sqrt3',
  };

  const getNodeStyle = (id: string) => {
    const isSelected = selectedNode === id;
    const isCorresponding = selectedNode && correspondences[selectedNode] === id;

    if (isSelected) return { fill: '#fbbf24', stroke: '#fbbf24', strokeWidth: 3 };
    if (isCorresponding) return { fill: '#6366f1', stroke: '#fbbf24', strokeWidth: 3 };
    return { fill: 'rgba(255,255,255,0.1)', stroke: 'rgba(255,255,255,0.3)', strokeWidth: 1.5 };
  };

  return (
    <div className="visual-container">
      <div className="visual-title">Interactive: The Galois Correspondence</div>

      <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-400)', marginBottom: '1rem' }}>
        Click on any field or subgroup to see its corresponding element. Notice how the lattices are "upside-down" mirrors!
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {/* Field lattice */}
        <div>
          <h4 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--color-gold-400)' }}>
            Fields
          </h4>
          <svg viewBox="0 0 400 350" width="200" height="175">
            {/* Connections */}
            {fieldConnections.map(([from, to], i) => {
              const fromNode = fields.find((f) => f.id === from)!;
              const toNode = fields.find((f) => f.id === to)!;
              return (
                <line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Nodes */}
            {fields.map((field) => {
              const style = getNodeStyle(field.id);
              return (
                <motion.g
                  key={field.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedNode(selectedNode === field.id ? null : field.id)}
                  whileHover={{ scale: 1.1 }}
                >
                  <circle
                    cx={field.x}
                    cy={field.y}
                    r="30"
                    {...style}
                  />
                  <text
                    x={field.x}
                    y={field.y + 4}
                    fill={selectedNode === field.id ? '#0a0f1e' : '#fff'}
                    fontSize="11"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {field.name}
                  </text>
                </motion.g>
              );
            })}

            <text x="200" y="330" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">
              (Larger field = smaller subgroup)
            </text>
          </svg>
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="60" height="40">
            <defs>
              <marker id="galois-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
              </marker>
            </defs>
            <line x1="5" y1="20" x2="50" y2="20" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#galois-arrow)" />
            <line x1="55" y1="20" x2="10" y2="20" stroke="#6366f1" strokeWidth="2" markerEnd="url(#galois-arrow)" transform="translate(0, 8)" />
          </svg>
        </div>

        {/* Group lattice */}
        <div>
          <h4 style={{ textAlign: 'center', marginBottom: '0.5rem', color: 'var(--color-indigo-400)' }}>
            Subgroups
          </h4>
          <svg viewBox="0 0 400 350" width="200" height="175">
            {/* Connections */}
            {groupConnections.map(([from, to], i) => {
              const fromNode = groups.find((g) => g.id === from)!;
              const toNode = groups.find((g) => g.id === to)!;
              return (
                <line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Nodes */}
            {groups.map((group) => {
              const style = getNodeStyle(group.id);
              return (
                <motion.g
                  key={group.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedNode(selectedNode === group.id ? null : group.id)}
                  whileHover={{ scale: 1.1 }}
                >
                  <circle
                    cx={group.x}
                    cy={group.y}
                    r="30"
                    {...style}
                  />
                  <text
                    x={group.x}
                    y={group.y + 4}
                    fill={selectedNode === group.id ? '#0a0f1e' : '#fff'}
                    fontSize="11"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {group.name}
                  </text>
                </motion.g>
              );
            })}

            <text x="200" y="330" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">
              (Larger subgroup = smaller field)
            </text>
          </svg>
        </div>
      </div>

      {/* Info panel */}
      {selectedNode && (
        <motion.div
          className="callout callout-discovery"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="callout-title">Selected: {
            fields.find(f => f.id === selectedNode)?.name ||
            groups.find(g => g.id === selectedNode)?.name
          }</div>
          <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>
            {fields.find(f => f.id === selectedNode)?.info ||
             groups.find(g => g.id === selectedNode)?.info}
            {' '}Corresponds to{' '}
            <strong style={{ color: 'var(--color-indigo-400)' }}>
              {fields.find(f => f.id === correspondences[selectedNode])?.name ||
               groups.find(g => g.id === correspondences[selectedNode])?.name}
            </strong>
          </p>
        </motion.div>
      )}
    </div>
  );
}
