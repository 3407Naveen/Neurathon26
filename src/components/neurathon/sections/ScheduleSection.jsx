import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Sun, Moon, Sparkles } from 'lucide-react';

const schedule = [
    {
        day: "Day 1 - The Arrival",
        date: "February 9th",
        events: [
            { time: "08:00 AM", title: "Arrival at Hogwarts", desc: "Registration & Kit Distribution at Great Hall", icon: Sun },
            { time: "09:00 AM", title: "The Inauguration", desc: "Lighting the Goblet of Fire & Dumbledore's Speech", icon: Sparkles },
            { time: "09:30 AM", title: "The Unveiling", desc: "Problem Statements Revealed by the Sorting Hat", icon: Sparkles },
            { time: "10:00 AM", title: "Wands Ready", desc: "Hackathon Begins - 30 Hour Countdown Starts", icon: Clock },
            { time: "01:00 PM", title: "The Great Feast", desc: "Lunch Break", icon: Sun },
            { time: "04:00 PM", title: "Prefect's Patrol", desc: "Mentoring Round 1 - Guidance from Experts", icon: Sparkles },
            { time: "05:00 PM", title: "Butterbeer Break", desc: "High Tea & Refreshments", icon: Sun },
            { time: "08:00 PM", title: "Night Watch", desc: "Dinner & Fun Activities", icon: Moon },
        ]
    },
    {
        day: "Day 2 - The Finale",
        date: "February 10th",
        events: [
            { time: "08:00 AM", title: "Morning Potions", desc: "Breakfast to fuel your magic", icon: Sun },
            { time: "11:00 AM", title: "The Final Hour", desc: "Last minute commits & polish", icon: Clock },
            { time: "04:00 PM", title: "Wands Down", desc: "Submission Deadline - 30 Hours Complete", icon: Clock },
            { time: "04:30 PM", title: "The Last Feast", desc: "High Tea & Networking", icon: Sun },
            { time: "05:00 PM", title: "Defense Against the Dark Arts", desc: "Final Project Presentation (Pitching)", icon: Sparkles },
            { time: "07:30 PM", title: "The House Cup", desc: "Valedictory & Prize Distribution", icon: Sparkles },
        ]
    }
];

const TimelineNode = ({ event, index, isLeft }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-row md:flex-row items-stretch md:items-center justify-between w-full mb-8 md:mb-16 ${isLeft ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Desktop Spacer (keeps layout balanced) */}
            <div className="hidden md:block w-5/12" />

            {/* Mobile: Node Container (Fixed width to align with line) */}
            {/* Desktop: Absolute Center */}
            <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 z-20 flex-shrink-0 w-[100px] md:w-auto flex justify-center pt-2 md:pt-0">
                <div className="w-8 h-8 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)] border-4 border-black flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                </div>
            </div>

            {/* Content Card */}
            <div className={`flex-1 md:w-5/12 md:flex-none p-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-lg hover:border-[#D4AF37]/50 transition-colors">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'} text-[#D4AF37]`}>
                        <event.icon size={18} />
                        <span className="font-bold font-mono text-sm md:text-base">{event.time}</span>
                    </div>
                    <h4 className="text-lg md:text-2xl font-serif text-white mb-2 leading-tight">{event.title}</h4>
                    <p className="text-sm md:text-base text-gray-400 font-mono">{event.desc}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ScheduleSection = () => {
    return (
        <section className="relative pt-12 md:pt-24 pb-20 px-4 bg-black overflow-hidden min-h-screen">
            <style>{`
                 @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Montserrat:wght@300;400;500;600;700&display=swap');
                 .font-serif { font-family: 'Cinzel', serif; }
                 .font-mono { font-family: 'Montserrat', sans-serif; }
            `}</style>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] to-black opacity-50 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-[#D4AF37] mb-4 md:mb-6 tracking-wide">
                        THE TIME-TURNER
                        <br className="md:hidden" /> SCHEDULE
                    </h2>
                    <div className="w-24 md:w-48 h-1 bg-[#D4AF37] mx-auto rounded-full shadow-[0_0_10px_#D4AF37]" />
                </motion.div>

                <div className="relative">
                    {/* CONTINUOUS Central Line - Mobile: Left, Desktop: Center */}
                    <div className="absolute left-[49px] md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent md:-translate-x-1/2 opacity-30" />

                    {schedule.map((day, dayIndex) => (
                        <div key={dayIndex} className="mb-24 last:mb-0">
                            <div className="flex flex-col items-center mb-16 relative z-10">
                                <div className="bg-black/80 px-8 py-4 rounded-full border border-[#D4AF37]/30 backdrop-blur-md">
                                    <h3 className="text-2xl md:text-4xl font-serif text-white mb-1 text-center">{day.day}</h3>
                                    <span className="text-[#D4AF37] font-mono tracking-widest text-sm md:text-base uppercase flex justify-center text-center">{day.date}</span>
                                </div>
                            </div>

                            <div className="relative">
                                {day.events.map((event, index) => (
                                    <TimelineNode
                                        key={index}
                                        event={event}
                                        index={index}
                                        isLeft={index % 2 === 0}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
