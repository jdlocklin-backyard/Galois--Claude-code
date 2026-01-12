import { motion } from 'framer-motion';

export function About() {
  return (
    <div className="lesson-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="lesson-content">
          <h1 style={{ marginBottom: '2rem' }}>About Galois Explorer</h1>

          <section className="lesson-section">
            <h3 style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }}>Our Mission</h3>
            <p>
              Galois Explorer is an interactive educational tool designed to make one of
              mathematics' most profound theories accessible to learners of all ages and
              backgrounds. We believe that beautiful mathematics should be understood and
              appreciated by everyone.
            </p>
          </section>

          <section className="lesson-section">
            <h3 style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }}>Three Learning Tracks</h3>

            <div className="callout callout-concept">
              <div className="callout-title">Explorer Track (Ages 8+)</div>
              <p style={{ margin: 0 }}>
                Uses stories, visual analogies, and simple puzzles to introduce the core
                ideas. No prior math knowledge required beyond basic arithmetic.
              </p>
            </div>

            <div className="callout callout-concept">
              <div className="callout-title">Learner Track (Curious Adults)</div>
              <p style={{ margin: 0 }}>
                For lifelong learners who want to understand the "why" behind the theory.
                Assumes familiarity with basic algebra but explains all advanced concepts.
              </p>
            </div>

            <div className="callout callout-concept">
              <div className="callout-title">Advanced Track (AP Students)</div>
              <p style={{ margin: 0 }}>
                Rigorous mathematical treatment suitable for advanced high school or
                undergraduate students. Includes formal definitions, theorems, and proofs.
              </p>
            </div>
          </section>

          <section className="lesson-section">
            <h3 style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }}>What You'll Learn</h3>
            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li>What polynomials are and why finding their roots matters</li>
              <li>How mathematicians built new number systems (field extensions)</li>
              <li>The beautiful mathematics of symmetry and group theory</li>
              <li>What Galois groups are and how they connect everything</li>
              <li>Why some equations can never have a general formula</li>
              <li>The remarkable story of Évariste Galois himself</li>
            </ul>
          </section>

          <section className="lesson-section">
            <h3 style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }}>Interactive Features</h3>
            <p>
              Each module includes:
            </p>
            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li><strong>Visual demonstrations</strong> - See abstract concepts come to life</li>
              <li><strong>Interactive exercises</strong> - Manipulate and explore mathematical objects</li>
              <li><strong>Knowledge checks</strong> - Test your understanding with quizzes</li>
              <li><strong>Progress tracking</strong> - Keep track of what you've learned</li>
            </ul>
          </section>

          <section className="lesson-section">
            <h3 style={{ color: 'var(--color-gold-400)', marginBottom: '1rem' }}>Sources & References</h3>
            <p>This app draws from:</p>
            <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Galois_theory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia: Galois Theory
                </a>
              </li>
              <li>
                <a
                  href="https://nrich.maths.org/articles/introduction-galois-theory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NRICH: An Introduction to Galois Theory
                </a>
              </li>
              <li>
                <a
                  href="https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Keith Conrad: The Galois Correspondence
                </a>
              </li>
            </ul>
          </section>

          <div className="callout callout-discovery" style={{ marginTop: '2rem' }}>
            <div className="callout-title">Start Learning</div>
            <p style={{ margin: 0 }}>
              Ready to explore? Head back to the{' '}
              <a href="/">modules page</a> and begin your journey through Galois theory!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
