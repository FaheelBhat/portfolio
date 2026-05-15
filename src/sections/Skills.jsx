import { motion } from 'framer-motion';
import {
  SiReact, SiHtml5, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiMysql, SiPython, SiGithub
} from 'react-icons/si';
import { FaCss3Alt, FaChartBar, FaBrain, FaFileExcel, FaCode, FaServer, FaDatabase, FaTerminal } from 'react-icons/fa';
import { FiCode as FiCodeIcon, FiDatabase as FiDbIcon, FiBarChart2, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCodeIcon,
    skills: [
      { name: 'React.js', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, level: 90, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: FiDbIcon,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Express.js', icon: FaServer, level: 82, color: '#000000' },
      { name: 'SQL', icon: FaDatabase, level: 88, color: '#003B57' },
      { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
    ],
  },
  {
    title: 'Data Analytics & AI',
    icon: FiBarChart2,
    skills: [
      { name: 'Python', icon: SiPython, level: 90, color: '#3776AB' },
      { name: 'Pandas', icon: FaChartBar, level: 85, color: '#150458' },
      { name: 'NumPy', icon: FaBrain, level: 82, color: '#013243' },
      { name: 'Power BI', icon: FaChartBar, level: 88, color: '#F2C811' },
      { name: 'Machine Learning', icon: FaBrain, level: 78, color: '#F7931E' },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    skills: [
      { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
      { name: 'VS Code', icon: FaCode, level: 92, color: '#007ACC' },
      { name: 'Jupyter', icon: FaTerminal, level: 85, color: '#F37626' },
      { name: 'Excel', icon: FaFileExcel, level: 88, color: '#217346' },
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
