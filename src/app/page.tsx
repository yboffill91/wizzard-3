'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './Components/Wellcome';
import ContactForm from './Components/ContactForm';
import ThankYou from './Components/ThankYou';

type Step = 'welcome' | 'form' | 'thankYou';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep('form');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleFormCompletion = () => {
    setCurrentStep('thankYou');
  };

  return (
    <div className='relative w-screen h-screen overflow-hidden bg-blue-500'>
      <AnimatePresence mode='wait'>
        {currentStep === 'welcome' && (
          <motion.div
            key='welcome'
            initial={{ width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <Welcome />
          </motion.div>
        )}
        {currentStep === 'form' && (
          <motion.div
            key='form'
            initial={{ width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <ContactForm onComplete={handleFormCompletion} />
          </motion.div>
        )}
        {currentStep === 'thankYou' && (
          <motion.div
            key='thankYou'
            initial={{ width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            exit={{ opacity: 1, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <ThankYou />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
