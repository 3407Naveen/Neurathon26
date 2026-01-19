import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';

const RulesFAQSection = () => {
    const rules = [
        "Teams must consist of 2-5 members.",
        "Inter-college teams are allowed.",
        "Participants must bring their own laptops and chargers.",
        "AI tools can be used for assistance but not for generating entire codebases.",
        "Plagiarism or using pre-built projects will lead to disqualification.",
        "Decisions made by the judges will be final and binding."
    ];

    const faqs = [
        { q: "Is registration fee refundable?", a: "No, the registration fee of ₹100 per participant is non-refundable." },
        { q: "Will food be provided?", a: "Yes, food and refreshments will be provided throughout the 30-hour duration." },
        { q: "Do we need to stay overnight?", a: "Yes, this is a 30-hour hackathon, and teams are expected to stay at the venue overnight." },
        { q: "Are beginners allowed?", a: "Absolutely! Mentors will be available to guide you through the process." }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <div className="min-h-screen py-20 px-4 md:px-12 font-['Montserrat'] text-white">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center font-['Cinzel'] text-4xl md:text-5xl text-[#D4AF37] mb-16 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
                Decrees & Enquiries
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
            >
                {/* --- RULES SECTION --- */}
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <Scroll className="text-[#D4AF37]" size={32} />
                        <h3 className="font-['Cinzel'] text-3xl text-white border-b-2 border-[#D4AF37] pb-2 w-full">
                            Educational Decrees
                        </h3>
                    </div>

                    <div className="bg-[#0a0a0a]/60 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <ul className="space-y-6">
                            {rules.map((rule, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#D4AF37]/10 transition-colors border-l-2 border-transparent hover:border-[#D4AF37]"
                                >
                                    <span className="font-['Cinzel'] text-[#D4AF37] font-bold text-xl min-w-[2rem]">
                                        {idx + 1}.
                                    </span>
                                    <p className="text-gray-300 leading-relaxed font-light text-lg">
                                        {rule}
                                    </p>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* --- FAQ SECTION --- */}
                <motion.div variants={itemVariants} className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                        <HelpCircle className="text-[#D4AF37]" size={32} />
                        <h3 className="font-['Cinzel'] text-3xl text-white border-b-2 border-[#D4AF37] pb-2 w-full">
                            Common Enquiries
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="bg-[#0a0a0a]/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:border-[#D4AF37]/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <AlertCircle size={20} className="text-[#D4AF37] mt-1 flex-shrink-0" />
                                    <h4 className="font-['Cinzel'] text-[#F2D675] text-xl font-bold">
                                        {faq.q}
                                    </h4>
                                </div>
                                <div className="flex items-start gap-3 pl-2 border-l border-[#D4AF37]/30 ml-2">
                                    <p className="text-gray-300 font-light leading-relaxed pl-4">
                                        {faq.a}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RulesFAQSection;
