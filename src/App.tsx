import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  BarChart3, 
  BrainCircuit, 
  ChevronDown, 
  Moon, 
  Sun, 
  Menu, 
  X,
  MapPin,
  Send
} from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    { name: 'Python', category: 'Languages', icon: <Code2 className="w-5 h-5" /> },
    { name: 'C / C++', category: 'Languages', icon: <Code2 className="w-5 h-5" /> },
    { name: 'SQL', category: 'Languages', icon: <Database className="w-5 h-5" /> },
    { name: 'JavaScript', category: 'Languages', icon: <Code2 className="w-5 h-5" /> },
    { name: 'Scikit-learn', category: 'Data Science', icon: <BrainCircuit className="w-5 h-5" /> },
    { name: 'PyTorch', category: 'Data Science', icon: <BrainCircuit className="w-5 h-5" /> },
    { name: 'Pandas / NumPy', category: 'Data Science', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Hadoop / HBase', category: 'Big Data', icon: <Database className="w-5 h-5" /> },
    { name: 'MongoDB', category: 'Big Data', icon: <Database className="w-5 h-5" /> },
    { name: 'Matplotlib / Seaborn', category: 'Visualization', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application built with Django, featuring authentication, cart management, and order processing.',
      tags: ['Django', 'Python', 'JavaScript', 'SQL'],
      year: '2024',
      link: '#'
    },
    {
      title: 'Predictive Analysis with ML',
      description: 'Exploratory data analysis and implementation of regression and classification models using Scikit-learn for Kaggle datasets.',
      tags: ['Scikit-learn', 'Pandas', 'EDA', 'ML'],
      year: '2025',
      link: '#'
    },
    {
      title: 'Big Data & NoSQL Architecture',
      description: 'Distributed processing environment setup using Hadoop, MongoDB Aggregation pipelines, and HBase data manipulation.',
      tags: ['Hadoop', 'MongoDB', 'HBase', 'Big Data'],
      year: '2025',
      link: '#'
    },
    {
      title: 'Algorithms & Data Structures',
      description: 'Implementation of core algorithms like Quicksort, Mergesort, and graph traversals (BFS/DFS) in Python and C++.',
      tags: ['Algorithms', 'C++', 'Python', 'Data Structures'],
      year: '2024',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.a 
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-brand-600 dark:text-brand-400"
          >
            IB.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-600 dark:text-slate-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="section-container grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Ismail <span className="text-brand-600 dark:text-brand-400">Benradouan</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-serif italic">
                Master's student in Mathematical Engineering & Data Science, passionate about predictive modeling and distributed architectures.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-brand-600/20 active:scale-95"
                >
                  View Projects
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-600 dark:hover:border-brand-400 rounded-xl font-semibold transition-all active:scale-95"
                >
                  Contact Me
                </a>
              </div>
              <div className="mt-12 flex items-center gap-6 text-slate-400">
                <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:benradouanismail05@gmail.com" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://picsum.photos/seed/ismail/800/800" 
                  alt="Ismail Benradouan"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-200 dark:bg-brand-800 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-400 dark:bg-brand-600 rounded-full blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
            <ChevronDown className="w-6 h-6" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-slate-50 dark:bg-slate-900/50">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card relative z-10">
                  <h2 className="text-3xl font-bold mb-6">About Me</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    I am a dedicated student pursuing a Master's in Mathematical Engineering and Data Science. My expertise lies in the intersection of mathematics and computer science, specifically in Data Science, Machine Learning, and Big Data.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    Passionate about data analysis and predictive modeling, I develop solutions ranging from exploratory analysis to the implementation of complex machine learning models on distributed architectures.
                  </p>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    Zagora, Morocco
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-brand-500/20 rounded-2xl -rotate-3 -z-10"></div>
              </motion.div>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                    <p className="text-slate-600 dark:text-slate-400">Specialized in regression, classification, and deep learning models using Scikit-learn and PyTorch.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Big Data</h3>
                    <p className="text-slate-600 dark:text-slate-400">Experience with Hadoop ecosystem, NoSQL databases like MongoDB and HBase for large-scale data processing.</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
                    <p className="text-slate-600 dark:text-slate-400">Creating insightful visualizations using Matplotlib and Seaborn to communicate data findings effectively.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
              <p className="text-slate-600 dark:text-slate-400">A comprehensive toolkit for data science and software engineering.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-6 flex flex-col items-center text-center hover:border-brand-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-sm mb-1">{skill.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{skill.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
          <div className="section-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-600 dark:text-slate-400">Showcasing my work in web development, machine learning, and big data architecture.</p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold hover:underline">
                View all on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-brand-500/10 transition-all"
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">{project.year}</span>
                      <a href={project.link} className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-brand-500 hover:text-white transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">Let's <span className="text-brand-600 dark:text-brand-400">Connect</span></h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email Me</p>
                      <a href="mailto:benradouanismail05@gmail.com" className="text-lg font-bold hover:text-brand-600 dark:hover:text-brand-400 transition-colors">benradouanismail05@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center shrink-0">
                      <Linkedin className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">LinkedIn</p>
                      <a href="#" className="text-lg font-bold hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Ismail Benradouan</a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 dark:focus:border-brand-500 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 dark:focus:border-brand-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 dark:focus:border-brand-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold tracking-tighter text-brand-600 dark:text-brand-400 mb-2">IB.</p>
            <p className="text-sm text-slate-400">© 2026 Ismail Benradouan. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-all"><Github className="w-4 h-4" /></a>
            <a href="#" className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500 transition-all"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
