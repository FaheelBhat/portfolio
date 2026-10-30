import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';

const stats = [
  { icon: FiCode, label: 'Projects Completed', value: 10, suffix: '+' },
  { icon: FiBriefcase, label: 'Roles & Internships', value: 3, suffix: '' },
  { icon: FiAward, label: 'Skills Mastered', value: 20, suffix: '+' },
  { icon: FiBookOpen, label: 'Certifications', value: 1, suffix: '' },
];

const experiences = [
  {
    title: 'Generative AI Evaluator / AI Training Specialist',
    company: 'Handshake AI & Outlier (Freelance)',
    period: 'April 2026 – Present',
    icon: FiBriefcase,
  },
  {
    title: 'Machine Learning Engineer / Data Scientist',
    company: 'Siffrum Analytics Pvt Ltd',
    period: 'January 2026 – June 2026',
    icon: FiBriefcase,
  },
  {
    title: 'Data Annotation & Analytics Intern',
    company: 'Kmunotag Pvt Ltd & Databricks',
    period: 'July 2025 – December 2025',
    icon: FiAward,
  },
];

const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  university: 'University of Kashmir (2021 – 2024)',
  grade: 'CGPA / Percentage: 74.6%',
  certification: 'Certified in Data Science – ILS Institute (2024 – 2025)',
  technologies: 'Python, SQL, Power BI, Machine Learning',
};

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Data and AI professional with experience in Machine Learning, Data Science, MLOps, Generative AI evaluation, and data analytics. Skilled in Python, SQL, Scikit-learn, Pandas, NumPy, Power BI, and machine learning workflows. Hands-on experience with model evaluation, data preprocessing, computer vision annotation, LLM quality assessment, and MLOps tools including Docker, MLflow, DVC, GitHub Actions, and AWS.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-500" />
                  <div className="text-2xl font-bold gradient-text">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience & Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Experience Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FiBriefcase className="text-primary-500" />
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 5 }}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20">
                    <exp.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">{exp.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -3 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FiBookOpen className="text-primary-500" />
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{education.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{education.university}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-0.5">{education.grade}</p>
                </div>
                <div className="pt-3 border-t border-gray-200 dark:border-dark-700">
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {education.certification}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Technologies: {education.technologies}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
