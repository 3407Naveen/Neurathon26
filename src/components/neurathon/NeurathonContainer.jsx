import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HackathonNav from './HackathonNav';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import PrizesSection from './sections/PrizesSection';
import ScheduleSection from './sections/ScheduleSection';
import ContactSection from './sections/ContactSection';
import RulesFAQSection from './sections/RulesFAQSection';
import '../../index.css'; // Ensure we have access to global variables

const NeurathonContainer = ({ activeSection, setActiveSection, onClose }) => {
    // const [activeSection, setActiveSection] = useState('home'); // Lifted to App

    const renderSection = () => {
        switch (activeSection) {
            case 'home': return <HomeSection onRegister={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScnJ7mvtHkRvnX0BlzVZB0wKOV8Hnvusu_Nys0YLZiRMV82eg/viewform', '_blank')} />;
            case 'about': return <AboutSection />;
            case 'prizes': return <PrizesSection />;
            case 'schedule': return <ScheduleSection />;
            case 'rules': return <RulesFAQSection />;
            case 'contact': return <ContactSection />;
            default: return <HomeSection />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 200,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9))',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)'
            }}
        >
            <HackathonNav activeSection={activeSection} setActiveSection={setActiveSection} onClose={onClose} />

            <div style={{ flex: 1, overflowY: 'auto', position: 'relative', paddingTop: '120px' }}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100%' }}
                    >
                        {renderSection()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default NeurathonContainer;
