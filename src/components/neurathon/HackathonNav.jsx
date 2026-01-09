import React from 'react';
import { X } from 'lucide-react';
import neurathonLogo from '../../assets/neurathon_logo.png';

const HackathonNav = ({ activeSection, setActiveSection, onClose }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'prizes', label: 'Prizes' },
        { id: 'schedule', label: 'Schedule' },
        { id: 'rules', label: 'Rules & FAQ' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} className="interactive" onClick={onClose}>
                <img src={neurathonLogo} alt="Neurathon" style={{ height: '40px' }} />
                <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)', fontSize: '1.5rem' }}>NEURATHON</span>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className="interactive"
                        onClick={() => setActiveSection(item.id)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: activeSection === item.id ? 'var(--gold)' : 'var(--text-muted)',
                            fontFamily: 'var(--font-body)',
                            fontSize: '1.1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            position: 'relative',
                            paddingBottom: '5px',
                            transition: 'color 0.3s'
                        }}
                    >
                        {item.label}
                        {activeSection === item.id && (
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                                boxShadow: '0 0 10px var(--gold)'
                            }} />
                        )}
                    </button>
                ))}
            </div>

            <button
                onClick={onClose}
                className="interactive"
                style={{
                    background: 'none',
                    border: '1px solid var(--gold-dim)',
                    borderRadius: '50%',
                    padding: '8px',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'none' // Custom cursor
                }}
            >
                <X size={24} />
            </button>
        </nav>
    );
};

export default HackathonNav;
