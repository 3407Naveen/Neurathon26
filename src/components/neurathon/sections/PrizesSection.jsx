import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Medal, Award, Sparkles } from 'lucide-react';

const PrizesSection = () => {
    const prizes = [
        {
            place: "2nd Place",
            amount: "₹10,000",
            subtitle: "Cash Prize",
            rewards: "Internship Opportunity + Swag Kit",
            icon: <Medal size={50} color="#C0C0C0" strokeWidth={1.5} />,
            color: "#C0C0C0",
            glow: "rgba(192, 192, 192, 0.5)",
            delay: 0.2
        },
        {
            place: "1st Place",
            amount: "₹15,000",
            subtitle: "Cash Prize",
            rewards: "Internship Opportunity + Swag Kit",
            icon: <Crown size={70} color="#FFD700" strokeWidth={1.5} />,
            color: "#FFD700",
            glow: "rgba(255, 215, 0, 0.6)",
            scale: 1.1, // Larger scale for center card
            zIndex: 10,
            delay: 0
        },
        {
            place: "3rd Place",
            amount: "₹5,000",
            subtitle: "Cash Prize",
            rewards: "Swag Kit",
            icon: <Award size={50} color="#CD7F32" strokeWidth={1.5} />,
            color: "#CD7F32",
            glow: "rgba(205, 127, 50, 0.5)",
            delay: 0.4
        }
    ];

    return (
        <div className="fade-in" style={{
            textAlign: 'center',
            padding: '4rem 1rem',
            position: 'relative'
        }}>
            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
                    <Crown size={40} color="var(--gold)" style={{ marginBottom: '1rem', opacity: 0.8 }} />
                    <h2 style={{
                        fontSize: '3.5rem',
                        color: 'var(--gold)',
                        marginBottom: '0.5rem',
                        fontFamily: '"Cinzel", serif',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        textShadow: '0 0 20px rgba(211, 166, 37, 0.4)'
                    }}>
                        Prizes of Neurathon
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#aaa',
                        fontStyle: 'italic',
                        letterSpacing: '0.05em',
                        fontFamily: '"Cinzel", serif'
                    }}>
                        Eternal glory awaits the victors
                    </p>
                </div>
            </motion.div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '4rem',
                perspective: '1000px'
            }}>
                {prizes.map((prize, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: prize.delay, ease: "backOut" }}
                        viewport={{ once: true }}
                        whileHover={{ y: -15, scale: prize.scale ? prize.scale * 1.05 : 1.05 }}
                        className="interactive"
                        style={{
                            background: 'rgba(20, 20, 20, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: `1px solid ${prize.color}`,
                            boxShadow: `0 0 20px ${prize.glow}, inset 0 0 20px rgba(0,0,0,0.5)`,
                            borderRadius: '12px',
                            padding: '3rem 2rem',
                            width: '320px',
                            minHeight: '400px', // Uniform height base
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            transform: prize.scale ? `scale(${prize.scale})` : 'scale(1)',
                            zIndex: prize.zIndex || 1,
                            marginTop: prize.scale ? 0 : '2rem', // Offset side cards down slightly if desired, or keep centered
                        }}
                    >
                        {/* Floating Icon Container */}
                        <div style={{
                            background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(50,50,50,0.2))`,
                            border: `2px solid ${prize.color}`,
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '2rem',
                            boxShadow: `0 0 30px ${prize.glow}`
                        }}>
                            {prize.icon}
                        </div>

                        <h3 style={{
                            color: prize.color,
                            fontSize: '1.5rem',
                            marginBottom: '1rem',
                            fontFamily: '"Cinzel", serif',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            {prize.place}
                        </h3>

                        <h4 style={{
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            marginBottom: '0.5rem',
                            textShadow: '0 0 10px rgba(255,255,255,0.3)'
                        }}>
                            {prize.amount}
                        </h4>

                        <p style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: '#888',
                            marginBottom: '2rem'
                        }}>
                            {prize.subtitle}
                        </p>

                        <div style={{
                            borderTop: `1px solid ${prize.glow}`,
                            width: '80%',
                            paddingTop: '1.5rem',
                            marginTop: 'auto' // Push to bottom
                        }}>
                            <p style={{
                                fontSize: '1rem',
                                color: '#ddd',
                                lineHeight: '1.6'
                            }}>
                                {prize.rewards}
                            </p>
                        </div>

                        {prize.place === "1st Place" && (
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                            }}>
                                <Sparkles color="#FFD700" size={20} className="pulse" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PrizesSection;
