import { motion } from 'framer-motion';
import { UserCircle } from 'lucide-react';

export default function ThankYou() {
  return (
    <motion.div
      className='w-screen h-screen bg-gradient-to-r from-blue-500 to-slate-900 flex flex-col items-center justify-center relative p-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className='text-4xl font-bold text-white '
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Thanks to Join Us
      </motion.h1>
      <motion.h1
        className='text-4xl font-bold text-white '
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Tamer<span className='text-orange-500'>Digital</span>
      </motion.h1>
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-900'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        style={{ zIndex: -1 }}
      />
      <motion.div
        className='absolute bottom-[10%] bg-blue-500 rounded-full p-4'
        initial={{ y: '80vh' }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <UserCircle className='text-white w-8 h-8' />
      </motion.div>
      <motion.div
        className='absolute inset-0 bg-blue-500 rounded-full'
        initial={{ scale: 0 }}
        animate={{
          scale: 100,
        }}
        transition={{ delay: 5.5, duration: 3, ease: 'easeInOut' }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}
