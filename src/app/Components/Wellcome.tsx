import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';

export default function Welcome() {
  return (
    <motion.div
      className='w-screen h-screen bg-slate-900 flex flex-col items-center justify-center relative p-5 '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.h1
        className='text-4xl font-bold text-white mb-8 text-center'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Hi it&apos;s Tamer<span className='text-orange-500'>Digital</span>
      </motion.h1>
      <motion.div
        className='absolute bottom-[10%] bg-blue-500 rounded-full p-4'
        initial={{ scale: 1 }}
        animate={{
          scale: 1,
          rotate: [45, 0, -45, 0, 45, 0, -45, 0, 45, 0, -45, 0, 45, 0, -45, 0],
        }}
        transition={{ delay: 1, duration: 5, ease: 'easeInOut' }}
      >
        <Hand className='text-white w-8 h-8' />
      </motion.div>
      <motion.div
        className='absolute inset-0 bg-blue-500 rounded-full'
        initial={{ scale: 0 }}
        animate={{ scale: 100 }}
        transition={{ delay: 1, duration: 3, ease: 'easeInOut' }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}
