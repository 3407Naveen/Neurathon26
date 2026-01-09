import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import wandSrc from '../assets/wand.svg';

const Cursor = () => {
    const cursorRef = useRef(null);
    const particleContainerRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const particles = particleContainerRef.current;

        const onMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            createParticle(e.clientX, e.clientY);
        };

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.className = 'magic-particle';
            particles.appendChild(particle);

            // Randomize particle physics
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 30 + 10;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            gsap.fromTo(particle,
                { x: x, y: y, opacity: 1, scale: Math.random() * 0.5 + 0.2 },
                {
                    x: x + tx,
                    y: y + ty,
                    opacity: 0,
                    scale: 0,
                    duration: 0.8 + Math.random() * 0.5,
                    onComplete: () => particle.remove()
                }
            );
        };

        const onHoverStart = () => setIsHovering(true);
        const onHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', onMouseMove);
        // Add listeners for clickable elements
        const clickables = document.querySelectorAll('a, button, .interactive');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', onHoverStart);
            el.addEventListener('mouseleave', onHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', onHoverStart);
                el.removeEventListener('mouseleave', onHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div ref={particleContainerRef} className="particle-container" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998 }} />
            <div ref={cursorRef} className={`custom-cursor ${isHovering ? 'hovering' : ''}`} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}>
                <img src={wandSrc} alt="wand" style={{ width: '60px', filter: 'drop-shadow(0 0 10px var(--gold))' }} />
                <div className="cursor-light" />
            </div>

            <style>{`
                .magic-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: var(--gold);
                    border-radius: 50%;
                    box-shadow: 0 0 5px var(--gold);
                    pointer-events: none;
                }
                .cursor-light {
                    position: absolute;
                    top: 0; 
                    left: 0;
                    width: 20px;
                    height: 20px;
                    background: radial-gradient(circle, var(--gold-glow), transparent);
                    transform: translate(-50%, -50%);
                    opacity: 0.5;
                    pointer-events: none;
                }
                .custom-cursor.hovering img {
                    filter: drop-shadow(0 0 15px var(--gold));
                    transform: scale(1.1);
                }
            `}</style>
        </>
    );
};

export default Cursor;
