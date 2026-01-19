import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const students = [
       { name: "Naveen S ", year: "II - AIDS" },
       { name: "Samyuktha P", year: "II - AIDS" }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-['Montserrat'] text-white relative py-20 px-4">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-['Cinzel'] text-4xl md:text-6xl text-[#D4AF37] mb-24 text-center tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
            >
                EVENT COORDINATORS
            </motion.h2>

            <div className="w-full max-w-4xl mx-auto space-y-20">

                {/* Faculty Coordinator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-[#D4AF37] font-bold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
                        Faculty Coordinator
                    </h3>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl font-bold text-white mb-2">
                        Ms S.K.Ramani
                    </h1>
                    <p className="text-gray-400 italic text-lg opacity-80 font-light">
                        AP/AIDS
                    </p>
                </motion.div>

                {/* Student Coordinators Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-center">
                    {students.map((student, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs md:text-sm mb-3 uppercase opacity-90">
                                Student Coordinator
                            </h3>
                            <h2 className="font-['Cinzel'] text-2xl md:text-3xl font-bold text-white mb-1">
                                {student.name}
                            </h2>
                            <p className="text-gray-400 italic text-base opacity-70 font-light">
                                {student.year}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>

            <footer className="absolute bottom-4 text-gray-700 text-xs tracking-widest uppercase">
                © 2025 Neurathon
            </footer>
        </div>
    );
};

export default ContactSection;
