import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiJavascript, SiPython, SiMysql, SiDocker } from 'react-icons/si';
import { FaChartBar, FaBrain, FaFileExcel } from 'react-icons/fa';

const techIcons = {
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'SQL': SiMysql,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Power BI': FaChartBar,
  'Pandas': FaChartBar,
  'NumPy': FaChartBar,
  'DAX': FaChartBar,
  'Power Query': FaChartBar,
  'Excel': FaFileExcel,
  'Machine Learning': FaBrain,
  'scikit-learn': FaBrain,
  'Docker': SiDocker,
};

const projects = [
  {
    id: 1,
    title: 'Customer Churn Prediction (Ongoing)',
    description: 'Built a customer churn prediction model using scikit-learn with rigorous data preprocessing, feature engineering, and hyperparameter tuning.',
    tech: ['Python', 'Machine Learning', 'scikit-learn', 'Pandas'],
    category: 'AI/ML',
    github: 'https://github.com/FaheelBhat',
    featured: true,
  },
  {
    id: 2,
    title: 'Spotify Data Analysis',
    description: 'Analyzed Spotify datasets using Python, Pandas, NumPy, Power BI, and Power Query to clean, transform, and uncover key streaming patterns.',
    tech: ['Python', 'Power BI', 'Pandas', 'NumPy'],
    category: 'Data Analytics',
    github: 'https://github.com/FaheelBhat',
  },
  {
    id: 3,
    title: 'YouTube Trend Analysis',
    description: 'Built analytical reports and dashboards exploring YouTube trends with data cleaning, Power Query, DAX calculations, and interactive visualizations.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    category: 'Data Analytics',
    github: 'https://github.com/FaheelBhat',
  },
  {
    id: 4,
    title: 'Shehjar Restaurant Management App',
    description: 'Full-stack restaurant ordering and management application with SQL database integration, dynamic frontend, and backend APIs.',
    tech: ['React.js', 'Node.js', 'SQL', 'JavaScript'],
    category: 'Full Stack',
    github: 'https://github.com/FaheelBhat/shehjar-billing-app.git',
  },
];

const filters = ['All', 'Full Stack', 'Data Analytics', 'AI/ML'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
              }`}
            >
              <span className="flex items-center gap-2">
                {filter === 'All' && <FiFilter size={14} />}
                {filter}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className={`glass-card overflow-hidden group ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      {project.featured && (
                        <span className="inline-block px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-semibold mb-2">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-all"
                          aria-label="View on GitHub"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech];
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs font-medium"
                        >
                          {Icon && <Icon size={14} />}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
