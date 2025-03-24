import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 blur-xl opacity-20"
        />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="relative w-12 h-12"
        >
          <div className="absolute inset-0 rounded-full border-4 border-violet-500/30" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};