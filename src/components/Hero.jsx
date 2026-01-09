import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import castleSrc from '../assets/castle.png';

const Hero = ({ onOpenDetail }) => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Parallax Effect
        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(bgRef.current, {
                x: -xPos,
                y: -yPos,
                duration: 1,
                ease: 'power2.out'
            });

            gsap.to(textRef.current, {
                x: xPos * 2,
                y: yPos * 2,
                duration: 1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Intro Animation
        const tl = gsap.timeline();
        tl.fromTo(bgRef.current, { scale: 1.2, opacity: 0 }, { scale: 1.1, opacity: 1, duration: 2, ease: 'power2.out' })
            .fromTo(textRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }, "-=1");

        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <section ref={heroRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    top: -20, left: -20, right: -20, bottom: -20,
                    backgroundImage: `url(${castleSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    filter: 'brightness(0.6) contrast(1.2)'
                }}
            />
            {/* Mist Overlay (CSS) */}
            <div className="mist-overlay" />

            <div ref={textRef} style={{ zIndex: 10, textAlign: 'center', color: 'var(--gold)' }}>
                <h1 style={{
                    fontSize: '5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to bottom, #cfc09f 0%, #ffecb3 20%, #3a2c0f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 0 #000)'
                }}>
                    NEURATHON
                </h1>
                <p style={{ fontSize: '1.5rem', fontFamily: 'var(--font-body)', letterSpacing: '0.1em', opacity: 0.8 }}>
                    Code. Create. Conquer.
                </p>

                <div
                    style={{ marginTop: '3rem', cursor: 'pointer' }}
                    className="interactive"
                    onClick={onOpenDetail}
                >
                    <span style={{ fontSize: '2rem', animation: 'float 3s ease-in-out infinite' }}>↓</span>
                </div>
            </div>

            <style>{`
                .mist-overlay {
                    position: absolute;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%);
                    pointer-events: none;
                    z-index: 1;
                }
            `}</style>
        </section>
    );
};

export default Hero;
