import { motion } from 'framer-motion';
import {
  SiReact, SiHtml5, SiJavascript, SiNodedotjs, SiMysql,
  SiPython, SiGithub, SiDocker, SiMlflow, SiFlask, SiFastapi
} from 'react-icons/si';
import { FaChartBar, FaBrain, FaFileExcel, FaCode, FaDatabase, FaTerminal, FaUsers, FaAws } from 'react-icons/fa';
import { FiCode as FiCodeIcon, FiBarChart2, FiCpu, FiTool, FiCheckSquare } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Data Science & AI',
    icon: FiBarChart2,
    skills: [
      { name: 'Machine Learning', icon: FaBrain, level: 90, color: '#F7931E' },
      { name: 'Scikit-learn', icon: FaBrain, level: 88, color: '#F89939' },
      { name: 'Power BI & DAX', icon: FaChartBar, level: 88, color: '#F2C811' },
      { name: 'Pandas & NumPy', icon: FaChartBar, level: 90, color: '#150458' },
      { name: 'LLM Evaluation & Prompt Eng.', icon: FaBrain, level: 92, color: '#10A37F' },
      { name: 'EDA & Data Annotation', icon: FiCheckSquare, level: 90, color: '#8B5CF6' },
    ],
  },
  {
    title: 'MLOps & Deployment',
    icon: FiCpu,
    skills: [
      { name: 'Docker', icon: SiDocker, level: 85, color: '#2496ED' },
      { name: 'MLflow & DVC', icon: SiMlflow, level: 82, color: '#0194E2' },
      { name: 'GitHub Actions (CI/CD)', icon: SiGithub, level: 84, color: '#2088FF' },
      { name: 'AWS (Cloud & Deployments)', icon: FaAws, level: 80, color: '#FF9900' },
      { name: 'Flask / FastAPI', icon: SiFastapi, level: 85, color: '#009688' },
    ],
  },
  {
    title: 'Programming & Web',
    icon: FiCodeIcon,
    skills: [
      { name: 'Python', icon: SiPython, level: 92, color: '#3776AB' },
      { name: 'SQL', icon: FaDatabase, level: 88, color: '#003B57' },
      { name: 'JavaScript', icon: SiJavascript, level: 85, color: '#F7DF1E' },
      { name: 'React.js', icon: SiReact, level: 85, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, level: 80, color: '#339933' },
      { name: 'HTML & CSS', icon: SiHtml5, level: 92, color: '#E34F26' },
    ],
  },
  {
    title: 'Tools & Soft Skills',
    icon: FiTool,
    skills: [
      { name: 'MySQL & Databases', icon: SiMysql, level: 85, color: '#4479A1' },
      { name: 'GitHub & Git', icon: SiGithub, level: 90, color: '#181717' },
      { name: 'VS Code & Jupyter Notebook', icon: FaTerminal, level: 92, color: '#F37626' },
      { name: 'Excel / Power Query', icon: FaFileExcel, level: 88, color: '#217346' },
      { name: 'Problem-Solving & Teamwork', icon: FaUsers, level: 94, color: '#6366F1' },
    ],
  },
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <skill.icon
          className="w-5 h-5 flex-shrink-0"
          style={{ color: skill.color }}
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 flex-1">
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on projects and professional experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              {category.skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
