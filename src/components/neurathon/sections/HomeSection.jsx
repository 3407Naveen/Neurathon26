import React from 'react';
import neurathonLogo from '../../../assets/neurathon_logo.png';
import collegeLogo from '../../../assets/college_logo.png';

const HomeSection = ({ onRegister }) => {
    // Countdown logic (static for now, can be dynamic)
    const eventDate = new Date('2025-12-19T09:00:00');
    const now = new Date();
    // Simple placeholder for countdown visuals

    return (
        <div style={{ textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}>
                <img src={collegeLogo} alt="College Logo" style={{ height: '80px', opacity: 0.9 }} />
                <div style={{ height: '60px', width: '2px', background: 'var(--gold-dim)' }}></div>
                <img src={neurathonLogo} alt="Neurathon Logo" style={{ height: '100px' }} />
            </div>

            <h1 className="magical-text" style={{ fontSize: '6rem', fontFamily: 'var(--font-heading)', marginBottom: '0.5rem' }}>
                NEURATHON
            </h1>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', letterSpacing: '0.3em', marginBottom: '2rem' }}>
                Code. Create. Conquer.
            </h2>

            <div style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--gold-dim)',
                padding: '2rem',
                borderRadius: '12px',
                marginBottom: '3rem',
                backdropFilter: 'blur(5px)',
                maxWidth: '600px'
            }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--gold)' }}>Date:</span> 9th - 10th February
                     2026
                </p>
                <p style={{ fontSize: '1.2rem' }}>
                    <span style={{ color: 'var(--gold)' }}>Venue:</span> Centre of Excellence (NB Block) & Mini Auditorium, New Prince Shri Bhavani College of Engineering and Technology
                </p>
            </div>

            <button
                onClick={onRegister}
                className="interactive"
                style={{
                    background: 'linear-gradient(45deg, var(--gold), #d4af37)',
                    border: 'none',
                    padding: '1rem 4rem',
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'bold',
                    color: '#000',
                    borderRadius: '50px',
                    boxShadow: '0 0 20px var(--gold-glow)',
                    cursor: 'none',
                    transform: 'scale(1)',
                    transition: 'transform 0.2s',
                    marginBottom: '2rem'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
                Register Now
            </button>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Registration Fee: ₹300 per team</p>
        </div>
    );
};

export default HomeSection;
