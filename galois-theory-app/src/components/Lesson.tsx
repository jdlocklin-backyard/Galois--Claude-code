import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { modules } from '../data/modules';
import { useTrack } from '../context/TrackContext';
import { Quiz } from './Quiz';
import { Visualization } from '../visualizations';

export function Lesson() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const { currentTrack, completeModule, setQuizScore, progress } = useTrack();

  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="lesson-container">
        <h2>Module not found</h2>
        <Link to="/">Return to modules</Link>
      </div>
    );
  }

  const content = module.content[currentTrack];
  const isCompleted = progress.completedModules.includes(module.id);

  const handleQuizComplete = (score: number) => {
    setQuizScore(module.id, score);
    if (score >= 70) {
      completeModule(module.id);
    }
  };

  return (
    <div className="lesson-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Modules</Link>
          <span>/</span>
          <span>{content.title}</span>
        </div>

        {/* Header */}
        <div className="lesson-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div className="module-number">{module.number}</div>
            {isCompleted && (
              <span style={{
                background: 'var(--color-success)',
                color: '#0a0f1e',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
              }}>
                Completed
              </span>
            )}
          </div>
          <h1>{content.title}</h1>
        </div>

        {/* Content */}
        <div className="lesson-content">
          {/* Introduction */}
          <div className="lesson-section">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-gray-200)' }}>
              {content.introduction}
            </p>
          </div>

          {/* Sections */}
          {content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="lesson-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-gold-400)' }}>
                {section.title}
              </h3>

              <p style={{ lineHeight: '1.8' }}>{section.content}</p>

              {/* Visual */}
              {section.visualType && <Visualization type={section.visualType} />}

              {/* Example */}
              {section.example && (
                <div className="callout callout-concept">
                  <div className="callout-title">Example</div>
                  <pre style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                  }}>
                    {section.example}
                  </pre>
                </div>
              )}
            </motion.div>
          ))}

          {/* Quiz section */}
          <div className="lesson-section">
            <h3 style={{ marginBottom: '1rem' }}>Test Your Understanding</h3>
            <Quiz questions={content.quiz} onComplete={handleQuizComplete} />
          </div>

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}>
            {module.number > 1 && (
              <Link
                to={`/module/${modules[module.number - 2].id}`}
                className="secondary-btn"
                style={{ textDecoration: 'none' }}
              >
                Previous Module
              </Link>
            )}
            <div style={{ flex: 1 }} />
            {module.number < modules.length && (
              <Link
                to={`/module/${modules[module.number].id}`}
                className="primary-btn"
                style={{ textDecoration: 'none' }}
              >
                Next Module
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
