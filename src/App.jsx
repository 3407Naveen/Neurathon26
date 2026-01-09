import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import SortingHat from './components/SortingHat';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NeurathonContainer from './components/neurathon/NeurathonContainer';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showNeurathon, setShowNeurathon] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
      <Cursor />
      <AnimatePresence>
        {showNeurathon && <NeurathonContainer activeSection={activeSection} setActiveSection={setActiveSection} onClose={() => setShowNeurathon(false)} />}
      </AnimatePresence>

      {/* Navigation (Simple) */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '2rem', display: 'flex', justifyContent: 'space-between', zIndex: 100, pointerEvents: 'none' }}>
        <div
          onClick={() => setShowNeurathon(false)}
          style={{ pointerEvents: 'auto', display: 'flex', gap: '1rem', color: 'var(--gold)', cursor: 'pointer' }}
          className="interactive"
        >
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>NEURATHON '25</span>
        </div>

        <div style={{ pointerEvents: 'auto', display: 'flex', gap: '2rem' }}>
          {[
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'prizes', label: 'Prizes' },
            { id: 'schedule', label: 'Schedule' },
            { id: 'rules', label: 'Rules' },
            { id: 'contact', label: 'Contact' },
          ].map(item => (
            <button
              key={item.id}
              className="interactive"
              onClick={() => {
                setActiveSection(item.id);
                setShowNeurathon(true);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id && showNeurathon ? 'var(--gold)' : 'var(--text-primary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.1em',
                fontSize: '1rem',
                cursor: 'none',
                transition: 'color 0.3s'
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <Hero onOpenDetail={() => setShowNeurathon(true)} />

        <div style={{ padding: '0 2rem' }}>
          <SortingHat />
        </div>
      </main>

      <footer style={{ padding: '4rem', textAlign: 'center', opacity: 0.5 }}>
        <p>&copy; 2025 Hogwarts School of Witchcraft and Wizardry</p>
      </footer>
    </div>
  );
}

export default App;
