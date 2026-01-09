import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Shield, Cpu } from 'lucide-react';
import hatSrc from '../assets/sorting_hat.png';

const DOMAINS = [
    {
        house: 'Ravenclaw',
        domain: 'Web Development',
        color: '#0e1a40', // Ravenclaw Blue
        accent: '#222f5b',
        glow: 'rgba(14, 26, 64, 0.8)',
        icon: Code,
        description: "Wit beyond measure is man's greatest treasure. Build intelligent, responsive, and complex web applications that solve real-world problems."
    },
    {
        house: 'Gryffindor',
        domain: 'App Development',
        color: '#740001', // Gryffindor Red
        accent: '#ae0001',
        glow: 'rgba(116, 0, 1, 0.8)',
        icon: Smartphone,
        description: "Daring, nerve, and chivalry. Create mobile experiences that are bold, user-centric, and push the boundaries of handheld technology."
    },
    {
        house: 'Slytherin',
        domain: 'Cybersecurity',
        color: '#1a472a', // Slytherin Green
        accent: '#2a623d',
        glow: 'rgba(26, 71, 42, 0.8)',
        icon: Shield,
        description: "Cunning folks use any means to achieve their ends. Secure systems, find vulnerabilities, and protect digital assets with ambition."
    },
    {
        house: 'Hufflepuff',
        domain: 'AI / ML',
        color: '#FFD700', // Hufflepuff Yellow (Gold) - adjusted for visibility
        accent: '#eebb0ea',
        glow: 'rgba(255, 215, 0, 0.6)',
        icon: Cpu,
        description: "Dedication, patience, and loyalty. Train models that learn, adapt, and serve the greater good with fairness and precision."
    }
];

const SortingHat = () => {
    const [isCeremonyComplete, setIsCeremonyComplete] = useState(false);

    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            background: '#000',
            color: '#fff',
            fontFamily: '"Cinzel", serif', // Assuming font is available globally
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <AnimatePresence mode="wait">
                {!isCeremonyComplete ? (
                    <motion.div
                        key="ceremony"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            zIndex: 10,
                            width: '100%'
                        }}
                    >
                        <motion.h2
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            style={{
                                fontSize: '4rem',
                                color: '#d3a625',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '2rem',
                                textShadow: '0 0 20px rgba(211, 166, 37, 0.5)'
                            }}
                        >
                            The Sorting Ceremony
                        </motion.h2>

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 1, 0, -1, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ margin: '2rem 0' }}
                        >
                            <img
                                src={hatSrc}
                                alt="Sorting Hat"
                                style={{
                                    width: '350px',
                                    filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.8))'
                                }}
                            />
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(211, 166, 37, 0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsCeremonyComplete(true)}
                            style={{
                                background: 'transparent',
                                border: '2px solid #d3a625',
                                color: '#d3a625',
                                padding: '1rem 3rem',
                                fontSize: '1.5rem',
                                fontFamily: '"Cinzel", serif',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                marginTop: '2rem',
                                textTransform: 'uppercase',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            Put on the Hat
                        </motion.button>

                    </motion.div>
                ) : (
                    <motion.div
                        key="domains"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            width: '100%',
                            padding: '2rem',
                            maxWidth: '1400px',
                            zIndex: 10,
                            textAlign: 'center'
                        }}
                    >
                        <h2 style={{
                            fontSize: '4rem',
                            color: '#d3a625',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase',
                            textShadow: '0 0 15px rgba(211, 166, 37, 0.3)'
                        }}>
                            The Four Houses
                        </h2>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#aaa',
                            marginBottom: '4rem',
                            fontStyle: 'italic',
                            letterSpacing: '0.05em'
                        }}>
                            Choose your path and bring glory to your domain
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            padding: '0 1rem'
                        }}>
                            {DOMAINS.map((item, index) => (
                                <motion.div
                                    key={item.house}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    whileHover={{
                                        y: -10,
                                        boxShadow: `0 0 30px ${item.glow}`,
                                        borderColor: item.color
                                    }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        padding: '2.5rem 1.5rem',
                                        borderRadius: '4px', // Sharp corners for more "Hogwarts" feel, or minimal radius
                                        textAlign: 'center',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {/* Top Bar Accent */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '4px',
                                        background: item.color,
                                        boxShadow: `0 0 10px ${item.color}`
                                    }} />

                                    <div style={{
                                        background: item.color,
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        boxShadow: `0 0 20px ${item.glow}`
                                    }}>
                                        <item.icon size={40} color="#fff" strokeWidth={1.5} />
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.4rem',
                                        color: item.color, // Use House color for name
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontWeight: 'bold'
                                    }}>
                                        {item.house}
                                    </h3>

                                    <h4 style={{
                                        fontSize: '1.2rem',
                                        color: '#fff',
                                        marginBottom: '1.5rem',
                                        fontWeight: 'normal'
                                    }}>
                                        {item.domain}
                                    </h4>

                                    <p style={{
                                        fontSize: '0.95rem',
                                        lineHeight: '1.6',
                                        color: '#ccc',
                                        fontFamily: 'sans-serif', // Easier to read
                                        fontWeight: 300
                                    }}>
                                        {item.description}
                                    </p>

                                    {/* Decorative Watermark Icon */}
                                    <item.icon
                                        style={{
                                            position: 'absolute',
                                            bottom: '-10px',
                                            right: '-10px',
                                            opacity: 0.05,
                                            width: '120px',
                                            height: '120px',
                                            transform: 'rotate(-15deg)'
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background elements (optional subtle gradients) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 1) 80%)',
                zIndex: -1
            }} />
        </section>
    );
};

export default SortingHat;
