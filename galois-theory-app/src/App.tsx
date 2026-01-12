import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrackProvider } from './context/TrackContext';
import { Header, Home, Lesson, About } from './components';
import './App.css';

function App() {
  return (
    <TrackProvider>
      <Router>
        <div className="geometric-bg" />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/:moduleId" element={<Lesson />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>
            Galois Explorer - An interactive journey through Galois Theory
          </p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
            Built to make beautiful mathematics accessible to everyone.
          </p>
        </footer>
      </Router>
    </TrackProvider>
  );
}

export default App;
