import { Link, useLocation } from 'react-router-dom';
import { useTrack } from '../context/TrackContext';
import { tracks } from '../data/modules';

export function Header() {
  const location = useLocation();
  const { currentTrack, setCurrentTrack } = useTrack();

  return (
    <header className="app-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#fbbf24" strokeWidth="2" />
            <path d="M20 5 L20 35 M5 20 L35 20" stroke="#6366f1" strokeWidth="1.5" opacity="0.5" />
            <circle cx="20" cy="20" r="8" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="20" cy="12" r="2" fill="#fbbf24" />
            <circle cx="20" cy="28" r="2" fill="#fbbf24" />
            <circle cx="12" cy="20" r="2" fill="#fbbf24" />
            <circle cx="28" cy="20" r="2" fill="#fbbf24" />
          </svg>
          <span>Galois Explorer</span>
        </Link>

        <nav className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Modules
          </Link>
          <Link
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            About
          </Link>
        </nav>

        <div className="track-selector">
          {tracks.map((track) => (
            <button
              key={track.id}
              className={`track-btn ${currentTrack === track.id ? 'active' : ''}`}
              onClick={() => setCurrentTrack(track.id)}
              title={track.description}
            >
              {track.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
