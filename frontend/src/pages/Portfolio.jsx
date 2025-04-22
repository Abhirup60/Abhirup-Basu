import React, { useEffect, useState } from "react";
import { motion, useScroll, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import Loader from "../components/Loader";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{ duration: 0.3 }}
      className='fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg z-50'
      aria-label='Scroll to top'
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setHeight(document.body.scrollHeight - window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate gradient stops based on scroll position
  const scrollProgress = height > 0 ? Math.min(scrollY / height, 1) : 0;

  // Define color stops that will change based on scroll
  const color1 = `hsl(${260 + scrollProgress * 60}, 70%, 10%)`;
  const color2 = `hsl(${280 + scrollProgress * 60}, 70%, 15%)`;
  const color3 = `hsl(${300 + scrollProgress * 60}, 70%, 20%)`;

  return (
    <div className='fixed inset-0 -z-10 overflow-hidden'>
      <div
        className='absolute inset-0 transition-colors duration-300'
        style={{
          background: `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
    </div>
  );
};

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className='min-h-screen text-white font-sans relative overflow-x-hidden'>
      <AnimatedBackground />

      {/* Scroll progress indicator */}
      <motion.div
        className='fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50'
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header Section */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className='py-6 px-4 md:px-16 flex justify-between items-center sticky top-0 bg-[#0e0b1f]/80 backdrop-blur-sm z-50'
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent'
        >
          Abhirup Basu
        </motion.h1>
        <nav className='flex items-center space-x-4 md:space-x-8'>
          <div className='hidden md:flex space-x-6'>
            <motion.a
              whileHover={{ scale: 1.05, color: "#c084fc" }}
              href='#about'
              className='hover:text-purple-400 transition-colors'
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: "#c084fc" }}
              href='#works'
              className='hover:text-purple-400 transition-colors'
            >
              Works
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: "#c084fc" }}
              href='#skills'
              className='hover:text-purple-400 transition-colors'
            >
              Skills
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, color: "#c084fc" }}
              href='#contact'
              className='hover:text-purple-400 transition-colors'
            >
              Contact
            </motion.a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='hidden md:block bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all text-sm shadow-lg'
          >
            Download CV
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='md:hidden p-2 rounded-md focus:outline-none'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='md:hidden fixed inset-0 z-40 bg-[#0e0b1f]/95 backdrop-blur-sm pt-20 px-6'
          >
            <div className='flex flex-col space-y-6 text-xl'>
              {[
                { name: "About", href: "#about" },
                { name: "Works", href: "#works" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href}
                  className='hover:text-purple-400 transition-colors py-2 border-b border-[#281f54]'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg mt-4'
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        id='about'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='text-center py-12 md:py-20 px-4 max-w-4xl mx-auto'
      >
        <motion.div variants={itemVariants} className='relative mx-auto w-32 h-32 mb-6'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md animate-pulse opacity-30'></div>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src='https://avatars.githubusercontent.com/u/74038190?v=4'
            alt='Abhirup Basu'
            className='relative w-full h-full object-cover rounded-full border-2 border-purple-500/30'
          />
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className='text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent'
        >
          I'm Abhirup Basu
        </motion.h2>
        <motion.p variants={itemVariants} className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
          Web Developer | I bring ideas to life using clean and scalable code.
        </motion.p>
        <motion.div variants={containerVariants} className='flex flex-wrap justify-center gap-4 md:gap-10'>
          {[
            { value: "1", label: "Internships" },
            { value: "4+", label: "Completed Projects" },
            { value: "10", label: "Technologies" },
            { value: "60+", label: "Codeforces Problems" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className='bg-[#1b1638]/50 p-4 rounded-lg backdrop-blur-sm border border-[#281f54] min-w-[120px]'
            >
              <p className='text-2xl font-semibold text-purple-300'>{item.value}</p>
              <p className='text-gray-400 text-sm'>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* My Quality Works */}
      {[
        {
          title: "Dynamic Website",
          description: "Interactive websites with server-side functionality and databases",
          tech: "React, Node.js, MongoDB",
        },
        {
          title: "Static Website",
          description: "Simple websites with fixed content and no databases",
          tech: "HTML, CSS, JavaScript",
        },
        {
          title: "Chat Application",
          description: "Real-time chat app application using socket.io, Authentication with JWT (Under Development)",
          tech: "React, Node, Express, MongoDB, socket.io",
          github: "https://github.com/yourusername/chat-application",
        },
        {
          title: "Alumni Website(GMIT)",
          description: "Interactive websites with server-side functionality and databases and Authentication with JWT",
          tech: "React, Node, Express, MongoDB",
          github: "https://github.com/Abhirup60/GMIT-Alumnis",
        },
        {
          title: "Social Media",
          description:
            "Interactive websites with server-side functionality and database, Like-Unlike & follow-unfollow functionalities also Post option is there and Authentication with JWT",
          tech: "React, Node, Express, MongoDB",
          github: "https://github.com/Abhirup60/Social-Media-Web-App-Mern-Stack",
        },
      ].map((work, index) => (
        <motion.div
          key={index}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className='bg-[#1b1638]/50 hover:bg-[#281f54]/70 p-6 rounded-lg transition-all duration-300 border border-[#281f54] hover:border-purple-500/30 backdrop-blur-sm cursor-pointer group'
        >
          <h4 className='text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors'>{work.title}</h4>
          <p className='text-sm text-gray-400 mb-3'>{work.description}</p>
          <p className='text-xs text-purple-400/70 mb-2'>{work.tech}</p>
          <a
            href={work.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center w-9 h-9 rounded-full bg-purple-400/20 hover:bg-purple-400/40 text-purple-300 hover:text-white transition-colors'
          >
            <img src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg' alt='GitHub' className='w-5 h-5' />
          </a>
        </motion.div>
      ))}

      {/* Experience and Education */}
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
        className='px-4 md:px-16 py-12 max-w-6xl mx-auto'
      >
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-6 text-purple-300'>My Experience</h3>
            <div className='space-y-4'>
              {[
                { year: "2024", title: "Web Developer Internship", company: "Cognifyz Technologies" },
                { year: "2023", title: "Web Development Training", company: "Euphoria Genx" },
                { year: "2024", title: "Full Stack Developer Training", company: "Euphoria Genx" },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className='bg-[#1b1638]/50 p-5 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all'
                >
                  <p className='text-purple-400 text-sm mb-1'>{exp.year}</p>
                  <p className='font-semibold'>{exp.title}</p>
                  <p className='text-gray-400 text-sm'>{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-6 text-purple-300'>My Education</h3>
            <div className='space-y-4'>
              {[
                { period: "2022 - 2026", degree: "B.TECH", institution: "Gargi Memorial Institute of Technology" },
                {
                  period: "2020 - 2022",
                  degree: "Higher Secondary Education (XII)",
                  institution: "Basirhat High School",
                },
                { period: "2019 - 2020", degree: "Secondary Education (X)", institution: "Basirhat High School" },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className='bg-[#1b1638]/50 p-5 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all'
                >
                  <p className='text-purple-400 text-sm mb-1'>{edu.period}</p>
                  <p className='font-semibold'>{edu.degree}</p>
                  <p className='text-gray-400 text-sm'>{edu.institution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id='skills'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInVariants}
        className='px-4 md:px-16 py-12 max-w-6xl mx-auto'
      >
        <motion.h3
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className='text-2xl md:text-3xl font-bold mb-8 text-center md:text-left'
        >
          My <span className='text-purple-300'>Skills</span>
        </motion.h3>

        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {[
            { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
            {
              name: "C++",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            },
            {
              name: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "MongoDB",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            {
              name: "Express.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            },
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            {
              name: "Java (Learning)",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
              name: "Spring Boot (Learning)",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
            },
            {
              name: "Next.js (Learning)",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },

            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            {
              name: "TypeScript (Learning)",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
              name: "Docker (Learning)",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ scale: 1.05 }}
              className='bg-[#1b1638]/50 p-4 text-center rounded-xl border border-[#281f54] hover:border-purple-400/30 hover:bg-[#281f54]/60 transition-all flex flex-col items-center justify-center space-y-3'
            >
              <img src={skill.icon} alt={skill.name} className='w-10 h-10 md:w-12 md:h-12 object-contain' />
              <p className='text-sm md:text-base text-white'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Hobbies Section */}
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInVariants}
        className='px-4 md:px-16 py-12 max-w-4xl mx-auto'
      >
        <motion.h3
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          className='text-2xl font-bold mb-6 text-purple-300'
        >
          My Hobbies
        </motion.h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {[
            "🎮 Playing Games",
            "✈️ Travelling",
            "🎵 Music & Movies",
            "📚 Reading",
            "💻 Coding Challenges",
            "🏸 Sports",
          ].map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className='bg-[#1b1638]/50 p-4 rounded-lg border border-[#281f54] hover:border-purple-500/30'
            >
              <p>{hobby}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInVariants}
        className='px-4 md:px-16 py-12 max-w-6xl mx-auto'
      >
        <motion.h3
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 20, opacity: 0 }}
          viewport={{ once: true }}
          className='text-2xl font-bold mb-6 text-purple-300'
        >
          Activities
        </motion.h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            {
              title: "Research Paper",
              description: "Published paper on emerging Machine Learning",
              year: "2025",
            },
            {
              title: "Coding Competition",
              description: "Participated in coding competition",
              year: "2024",
            },
          ].map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className='bg-[#1b1638]/50 p-6 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all'
            >
              <p className='text-lg font-semibold mb-2'>{activity.title}</p>
              <p className='text-sm text-gray-400 mb-3'>{activity.description}</p>
              <p className='text-xs text-purple-400/70'>{activity.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id='contact'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
        className='px-4 md:px-16 py-12 max-w-6xl mx-auto'
      >
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          <motion.div variants={itemVariants}>
            <h3 className='text-2xl font-bold mb-6 text-purple-300'>Contact Me</h3>
            <form className='space-y-4'>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type='text'
                placeholder='Name'
                className='w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent'
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type='email'
                placeholder='Email'
                className='w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent'
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type='text'
                placeholder='Subject'
                className='w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent'
              />
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows='4'
                placeholder='Message'
                className='w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent'
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className='bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg w-full md:w-auto'
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div variants={itemVariants} className='flex flex-col justify-center'>
            <div className='space-y-6'>
              <div className='flex items-start space-x-4'>
                <motion.div whileHover={{ rotate: 10 }} className='p-3 bg-purple-600/20 rounded-full'>
                  <Phone size={20} className='text-purple-300' />
                </motion.div>
                <div>
                  <h4 className='font-semibold'>Phone</h4>
                  <p className='text-gray-400'>+91-7679004336</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <motion.div whileHover={{ rotate: 10 }} className='p-3 bg-purple-600/20 rounded-full'>
                  <Mail size={20} className='text-purple-300' />
                </motion.div>
                <div>
                  <h4 className='font-semibold'>Email</h4>
                  <p className='text-gray-400'>abhirupbasu90@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <motion.div whileHover={{ rotate: 10 }} className='p-3 bg-purple-600/20 rounded-full'>
                  <MapPin size={20} className='text-purple-300' />
                </motion.div>
                <div>
                  <h4 className='font-semibold'>Location</h4>
                  <p className='text-gray-400'>Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='text-center text-gray-500 text-sm py-8 border-t border-[#281f54] mt-12'
      >
        <div className='max-w-6xl mx-auto px-4'>
          <p>&copy; {new Date().getFullYear()} Abhirup Basu. All rights reserved.</p>
          <div className='flex justify-center space-x-6 mt-4'>
            <motion.a
              whileHover={{ y: -2, color: "#c084fc" }}
              href='https://github.com/Abhirup60'
              className='text-gray-400 hover:text-purple-300 transition-colors'
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#c084fc" }}
              href='https://www.linkedin.com/in/abhirup-basu-ab487221b/'
              className='text-gray-400 hover:text-purple-300 transition-colors'
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#c084fc" }}
              href='https://x.com/'
              className='text-gray-400 hover:text-purple-300 transition-colors'
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#c084fc" }}
              href='https://codeforces.com/profile/abhirupbasu680'
              className='text-gray-400 hover:text-purple-300 transition-colors'
            >
              Codeforces
            </motion.a>
          </div>
        </div>
      </motion.footer>

      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
