import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Module } from '../types';
import { useTrack } from '../context/TrackContext';

interface ModuleCardProps {
  module: Module;
  index: number;
}

export function ModuleCard({ module, index }: ModuleCardProps) {
  const { currentTrack, progress } = useTrack();
  const content = module.content[currentTrack];
  const isCompleted = progress.completedModules.includes(module.id);
  const quizScore = progress.quizScores[module.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/module/${module.id}`} style={{ textDecoration: 'none' }}>
        <div className="module-card">
          <div className="module-number">{module.number}</div>
          <h3>{content.title}</h3>
          <p className="module-description">{module.shortDescription}</p>
          <div className="module-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: isCompleted ? '100%' : quizScore ? '50%' : '0%' }}
              />
            </div>
            <span>
              {isCompleted
                ? 'Completed'
                : quizScore
                ? 'In Progress'
                : 'Not Started'}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
