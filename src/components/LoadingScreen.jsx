import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-dark-900"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-dark-700" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-accent" />
        </motion.div>
        <motion.h2
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Faheel Hassan
        </motion.h2>
        <motion.p
          className="text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
