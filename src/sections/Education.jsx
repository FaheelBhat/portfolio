import { motion } from 'framer-motion';
import { FiAward, FiBook } from 'react-icons/fi';
import { SiPython, SiMysql } from 'react-icons/si';
import { FaGraduationCap, FaChartBar, FaBrain } from 'react-icons/fa';

const certifications = [
  { name: 'Data Science', org: 'ILS Institute', year: '2024–2025', icon: FiAward },
];

const techStack = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Power BI', icon: FaChartBar, color: '#F2C811' },
  { name: 'Machine Learning', icon: FaBrain, color: '#F7931E' },
];

const Education = () => {
  return (
    <section id="education" className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30">
                <FaGraduationCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Master of Computer Applications
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-1">
                  University of Kashmir
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  MCA Graduate with specialization in software development and data analytics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white shadow-lg shadow-accent/30">
                <FiAward size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Data Science Certification
                </h3>
                <p className="text-lg text-accent dark:text-accent font-medium mb-1">
                  ILS Institute
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Certified in Data Science (2024–2025)
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies Learned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass-card p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <FiBook className="text-primary-500" />
            Technologies Learned
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-gray-50 dark:bg-dark-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
              >
                <tech.icon size={36} style={{ color: tech.color }} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
