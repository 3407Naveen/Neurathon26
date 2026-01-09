import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Star, Shield, Wand2, Sparkles } from 'lucide-react';

const TIMELINE_DATA = {
    day1: {
        title: 'DAY 1 - THE ARRIVAL',
        date: 'February 18th',
        events: [
            { time: '08:00 AM', title: 'ARRIVAL AT HOGWARTS', desc: 'Registration & Kit Distribution at Great Hall.' },
            { time: '09:00 AM', title: 'THE INAUGURATION', desc: "Lighting the Goblet of Fire & Dumbledore's Speech." },
            { time: '09:30 AM', title: 'THE UNVEILING', desc: 'Problem Statements Revealed by the Sorting Hat.' },
            { time: '10:00 AM', title: 'WANDS READY', desc: 'Hackathon Begins - 30 Hour Countdown Starts.' },
            { time: '01:00 PM', title: 'THE GREAT FEAST', desc: 'Lunch Break.' },
            { time: '04:00 PM', title: 'PREFECT’S PATROL', desc: 'Mentoring Round 1 - Guidance from Experts.' },
            { time: '05:00 PM', title: 'BUTTERBEER BREAK', desc: 'High Tea & Refreshments.' },
            { time: '08:00 PM', title: 'NIGHT WATCH', desc: 'Dinner & Fun Activities.' }
        ]
    },
    day2: {
        title: 'DAY 2 - THE FINALE',
        date: 'February 19th',
        events: [
            { time: '08:00 AM', title: 'MORNING POTIONS', desc: 'Breakfast to fuel your magic.' },
            { time: '10:00 AM', title: 'THE FINAL HOUR', desc: 'Last minute commits & polish.' },
            { time: '11:00 AM', title: 'WANDS DOWN', desc: 'Submission Deadline - 30 Hours Complete.' },
            { time: '01:00 PM', title: 'THE LAST FEAST', desc: 'High Tea & Networking.' },
            { time: '02:00 PM', title: 'DEFENSE AGAINST THE DARK ARTS', desc: 'Final Project Presentation (Pitching).' },
            { time: '07:30 PM', title: 'THE HOUSE CUP', desc: 'Valedictory & Prize Distribution.' }
        ]
    }
};

const TimeTurnerTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="bg-black min-h-screen text-white relative font-montserrat">
            {/* --- Global Styles --- */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Montserrat:wght@300;400;700&display=swap');
                
                .font-cinzel { font-family: 'Cinzel', serif; }
                .font-montserrat { font-family: 'Montserrat', sans-serif; }
                
                .glass-card {
                    background: rgba(10, 10, 10, 0.7);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1), 0 0 15px rgba(212, 175, 55, 0.05);
                }

                .glow-gold {
                    text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
                }

                .nav-pill {
                    background: rgba(15, 15, 15, 0.8);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}</style>

            {/* --- Navigation Bar --- */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
                <div className="nav-pill rounded-full px-8 py-3 flex items-center justify-between border border-white/5">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <Shield className="text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                        <span className="font-cinzel font-black text-xl tracking-tighter text-[#D4AF37] glow-gold">NEURATHON</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {['HOUSES', 'TIMELINE', 'PRIZES', 'RULES', 'SPONSORS', 'FAQ', 'CONTACT'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className="group relative px-6 py-2 overflow-hidden">
                        <span className="relative z-10 font-cinzel font-bold text-sm tracking-widest text-[#D4AF37]">ENTER YOUR CLASS</span>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </button>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="pt-48 pb-32 text-center relative px-6">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="font-cinzel text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#F2D675] to-[#D4AF37] glow-gold leading-tight"
                >
                    THE TIME-TURNER SCHEDULE
                </motion.h1>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="h-[2px] w-64 mx-auto mt-8 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37]"
                />
            </section>

            {/* --- Timeline Section --- */}
            <section className="relative pb-64 px-6 max-w-7xl mx-auto">

                {/* --- The Magical Line --- */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[4px] md:-ml-[2px] h-full z-0">
                    <svg className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#D4AF37" />
                                <stop offset="50%" stopColor="#F2D675" />
                                <stop offset="100%" stopColor="#D4AF37" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#111" strokeWidth="4" />
                        <motion.line
                            x1="50%" y1="0" x2="50%" y2="100%"
                            stroke="url(#goldGradient)"
                            strokeWidth="4"
                            style={{ pathLength }}
                            filter="url(#glow)"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* --- Timeline Content --- */}
                <div className="relative z-10">
                    {Object.entries(TIMELINE_DATA).map(([dayKey, dayData]) => (
                        <div key={dayKey}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-center py-40"
                            >
                                <h2 className="font-cinzel text-4xl md:text-7xl font-bold text-[#F2D675] glow-gold tracking-widest">{dayData.title}</h2>
                                <p className="font-cinzel text-xl text-[#D4AF37] mt-4 opacity-80 tracking-[0.3em] font-bold">{dayData.date}</p>
                            </motion.div>

                            <div className="space-y-40">
                                {dayData.events.map((event, idx) => {
                                    const isLeft = idx % 2 === 0;
                                    return (
                                        <div key={idx} className={`relative flex items-center md:justify-between ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                            {/* --- Event Card --- */}
                                            <div className="w-full md:w-[45%] pl-16 md:pl-0">
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        x: isLeft ? -120 : 120,
                                                        rotateY: isLeft ? 15 : -15
                                                    }}
                                                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                                    viewport={{ once: true, margin: "-120px" }}
                                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                                    whileHover={{
                                                        scale: 1.05,
                                                        borderColor: "#FFD700",
                                                        boxShadow: "0 0 30px rgba(212, 175, 55, 0.2)"
                                                    }}
                                                    className={`group p-8 md:p-12 rounded-[2.5rem] glass-card relative transition-all duration-500 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                                                >
                                                    <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} gap-4`}>
                                                        <div className="flex items-center gap-2">
                                                            <Sparkles className="text-[#D4AF37] w-4 h-4" />
                                                            <span className="font-cinzel font-black text-sm tracking-[0.2em] text-[#D4AF37]">{event.time}</span>
                                                        </div>
                                                        <h3 className="font-cinzel text-3xl md:text-5xl font-black text-white group-hover:text-[#F2D675] transition-colors leading-tight tracking-tight">
                                                            {event.title}
                                                        </h3>
                                                        <p className="font-montserrat text-gray-400 text-lg leading-relaxed font-light tracking-wide">
                                                            {event.desc}
                                                        </p>
                                                    </div>

                                                    {/* Connector Line (Desktop) */}
                                                    <div className={`hidden md:block absolute top-[60px] h-[1px] bg-gradient-to-r ${isLeft ? 'from-[#D4AF37] to-transparent -right-12 w-12' : 'from-transparent to-[#D4AF37] -left-12 w-12'}`} />
                                                </motion.div>
                                            </div>

                                            {/* --- Magical Node --- */}
                                            <div className="absolute left-6 md:left-1/2 -ml-[12px] md:-ml-[16px] top-[40px] md:top-[60px] z-20">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    className="relative"
                                                >
                                                    <motion.div
                                                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.2, 0.5] }}
                                                        transition={{ duration: 3, repeat: Infinity }}
                                                        className="absolute -inset-4 bg-[#D4AF37] rounded-full blur-lg"
                                                    />
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#F2D675] to-[#D4AF37] border-4 border-black shadow-[0_0_15px_#D4AF37]" />
                                                </motion.div>
                                            </div>

                                            {/* Spacer for MD screens */}
                                            <div className="hidden md:block w-[45%]" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Magic Sparkles Overlay (Optional Footer Glow) --- */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#D4AF3710] to-transparent" />
        </div>
    );
};

export default TimeTurnerTimeline;
