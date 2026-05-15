import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle } from 'react-icons/fi';

const Toast = ({ message, visible, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-dark-800 shadow-2xl shadow-black/20 border border-gray-100 dark:border-dark-700"
        >
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/20">
            <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white">{message}</p>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          >
            <FiX size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
