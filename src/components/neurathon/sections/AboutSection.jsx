import React from 'react';

const AboutSection = () => {
    return (
        <div className="fade-in">
            <h2 style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '2rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>About The Event</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--gold-dim)' }}>
                    <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>The Mission</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                        NEURATHON is a premier 24-hour national-level hackathon designed to ignite the spark of innovation in young minds.
                        We bring together the brightest coders, designers, and problem-solvers to build solutions for real-world challenges.
                        Whether it's Web Dev, App Dev, Cybersecurity, or AI/ML, this is your platform to showcase your magic.
                    </p>
                </div>

                <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid var(--gold-dim)' }}>
                    <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>The Institution</h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                        Organized by <strong style={{ color: 'var(--text-primary)' }}>New Prince Shri Bhavani College of Engineering and Technology</strong>, Chennai.
                        We are committed to excellence in technical education and fostering a culture of research and innovation.
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Domains</h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {['Web Development', 'App Development', 'Cybersecurity', 'AI / ML'].map(domain => (
                        <span key={domain} style={{
                            padding: '0.5rem 1.5rem',
                            border: '1px solid var(--gold-dim)',
                            borderRadius: '20px',
                            background: 'rgba(0,0,0,0.3)',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {domain}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
