import { motion } from 'framer-motion';
import { ModuleCard } from './ModuleCard';
import { modules, tracks } from '../data/modules';
import { useTrack } from '../context/TrackContext';

export function Home() {
  const { currentTrack } = useTrack();
  const track = tracks.find((t) => t.id === currentTrack);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Discover Galois Theory</h1>
          <p className="hero-subtitle">
            Explore one of mathematics' most beautiful theories - from polynomials and symmetry
            to the profound question of why some equations have no formula.
            Choose your learning path and begin your journey.
          </p>

          {/* Track info */}
          <motion.div
            className="callout callout-discovery"
            style={{ display: 'inline-block', textAlign: 'left' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="callout-title">
              {track?.icon} Current Track: {track?.name}
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>{track?.description}</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Learning path visualization */}
      <section style={{ padding: '0 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          {modules.map((_, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-indigo-500), var(--color-indigo-600))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                }}
              >
                {i + 1}
              </div>
              {i < modules.length - 1 && (
                <div
                  style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-indigo-500), var(--color-gold-400))',
                    margin: '0 0.25rem',
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        <p style={{ textAlign: 'center', color: 'var(--color-gray-400)', fontSize: '0.9rem' }}>
          Follow the path from foundations to the grand conclusion
        </p>
      </section>

      {/* Module Cards */}
      <section className="modules-grid">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </section>

      {/* About Galois callout */}
      <section style={{ padding: '2rem 1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          className="callout callout-discovery"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="callout-title">About This Theory</div>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Galois Theory</strong> is named after Évariste Galois (1811-1832), a French
            mathematician who developed it as a teenager. The theory elegantly connects
            polynomial equations, field extensions, and group theory.
          </p>
          <p style={{ margin: 0 }}>
            Its most famous result: explaining why there's no general formula for solving
            polynomial equations of degree 5 or higher - and exactly which polynomials
            CAN be solved by formulas.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
