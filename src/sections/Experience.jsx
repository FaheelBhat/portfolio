import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    company: 'Handshake AI & Outlier',
    role: 'Generative AI Evaluator / AI Training Specialist (Freelance)',
    duration: 'April 2026 – Present',
    description: [
      'Evaluate large language models for reasoning quality, technical accuracy, instruction following, and code correctness.',
      'Assess AI performance on debugging, command execution, and software engineering tasks in simulated terminal environments.',
      'Review AI-generated responses for truthfulness, consistency, safety, and compliance with task-specific requirements.',
      'Develop challenging prompts and assess model reasoning, web-search grounding, and retrieval behavior.',
      'Conduct structured quality reviews to identify technical errors and improve output reliability across assigned projects.',
    ],
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 2,
    company: 'Siffrum Analytics Pvt Ltd',
    role: 'Machine Learning Engineer / Data Scientist',
    duration: 'January 2026 – June 2026',
    description: [
      'Developed and evaluated machine learning models using Python and Scikit-learn.',
      'Worked on data preprocessing, feature engineering, model evaluation, and exploratory data analysis.',
      'Applied MLOps tools and workflows, including MLflow, DVC, Docker, and GitHub Actions, in machine learning projects.',
      'Worked with Flask/FastAPI for model-serving APIs and REST API development where applicable.',
      'Explored deployment and orchestration workflows using AWS and Kubernetes.',
      'Used SQL and Python to support data processing, analysis, and application integration.',
    ],
    color: 'from-accent to-accent-dark',
  },
  {
    id: 3,
    company: 'Kmunotag Pvt Ltd & Databricks',
    role: 'Data Annotation & Analytics Intern',
    duration: 'July 2025 – December 2025',
    description: [
      'Annotated computer vision datasets for spatial and structural AI applications, including 2D bounding boxes and spatial feature extraction.',
      'Reviewed annotated datasets for accuracy and consistency to support downstream model training.',
      'Analyzed Spotify and YouTube datasets using Python, Pandas, NumPy, Power BI, and Power Query.',
      'Cleaned, transformed, and explored datasets to identify patterns and support data-driven insights.',
      'Built analytical reports and visualizations using Power BI and DAX.',
    ],
    color: 'from-primary-600 to-accent',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-white dark:ring-dark-900`}
                  />
                </div>

                {/* Card */}
                <div className={`${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:col-start-2 lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="glass-card p-6 lg:p-8"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white`}>
                        <FiBriefcase size={20} />
                      </div>
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.role}</p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      <FiCalendar size={14} />
                      <span>{exp.duration}</span>
                    </div>

                    <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className={`flex items-start gap-2 text-gray-600 dark:text-gray-300 text-sm ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                          <FiCheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'col-start-2' : 'col-start-1 row-start-1'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
