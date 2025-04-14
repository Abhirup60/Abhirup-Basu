import React, { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react"; 
import Loader from "../components/Loader";

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
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0b1f] via-[#1a1039] to-[#2e1a5e] animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10"></div>
    </div>
  );
};

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen text-white font-sans relative overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Header Section */}
      <header className="py-6 px-4 md:px-16 flex justify-between items-center sticky top-0 bg-[#0e0b1f]/80 backdrop-blur-sm z-50">
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Abhirup Basu</h1>
        <nav className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#works" className="hover:text-purple-400 transition-colors">Works</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all text-sm shadow-lg">
            Download CV
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="text-center py-12 md:py-20 px-4 max-w-4xl mx-auto">
        <div className="relative mx-auto w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md animate-pulse opacity-30"></div>
          <img
            src="https://avatars.githubusercontent.com/u/74038190?v=4"
            alt="Abhirup Basu"
            className="relative w-full h-full object-cover rounded-full border-2 border-purple-500/30"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
          I'm Abhirup Basu
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Web Developer | I bring ideas to life using clean and scalable code.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10">
          {[
            { value: "1", label: "Internships" },
            { value: "4+", label: "Completed Projects" },
            { value: "10", label: "Technologies" },
            { value: "60+", label: "Codeforces Problems" },
          ].map((item, index) => (
            <div key={index} className="bg-[#1b1638]/50 p-4 rounded-lg backdrop-blur-sm border border-[#281f54] min-w-[120px]">
              <p className="text-2xl font-semibold text-purple-300">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Quality Works */}
      <section id="works" className="px-4 md:px-16 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          My <span className="text-purple-300">Quality</span> Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Dynamic Website", 
              description: "Interactive websites with server-side functionality and databases",
              tech: "React, Node.js, MongoDB"
            },
            { 
              title: "Static Website", 
              description: "Simple websites with fixed content and no databases",
              tech: "HTML, CSS, JavaScript"
            },
            { 
              title: "IOT Project", 
              description: "Internet of Things applications connecting physical devices",
              tech: "Arduino, Raspberry Pi"
            },
            { 
              title: "Voice Assistance", 
              description: "Voice-controlled applications using speech recognition",
              tech: "Python, Speech Recognition"
            },
            { 
              title: "Weather App", 
              description: "Real-time weather information application",
              tech: "React, Weather API"
            },
          ].map((work, index) => (
            <div
              key={index}
              className="bg-[#1b1638]/50 hover:bg-[#281f54]/70 p-6 rounded-lg transition-all duration-300 border border-[#281f54] hover:border-purple-500/30 backdrop-blur-sm cursor-pointer group"
            >
              <h4 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                {work.title}
              </h4>
              <p className="text-sm text-gray-400 mb-3">{work.description}</p>
              <p className="text-xs text-purple-400/70">{work.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience and Education */}
      <section className="px-4 md:px-16 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-300">My Experience</h3>
            <div className="space-y-4">
              {[
                { year: "2024", title: "Web Developer Internship", company: "Tech Solutions Inc." },
                { year: "2023", title: "Web Development Training", company: "Code Academy" },
                { year: "2024", title: "Full Stack Developer Training", company: "Dev Masters" },
              ].map((exp, index) => (
                <div key={index} className="bg-[#1b1638]/50 p-5 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all">
                  <p className="text-purple-400 text-sm mb-1">{exp.year}</p>
                  <p className="font-semibold">{exp.title}</p>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-300">My Education</h3>
            <div className="space-y-4">
              {[
                { period: "2022 - 2026", degree: "B.TECH", institution: "Gargi Memorial Institute of Technology" },
                { period: "2020 - 2022", degree: "Higher Secondary Education (XII)", institution: "Basirhat High School" },
                { period: "2019 - 2020", degree: "Secondary Education (X)", institution: "Basirhat High School" },
              ].map((edu, index) => (
                <div key={index} className="bg-[#1b1638]/50 p-5 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all">
                  <p className="text-purple-400 text-sm mb-1">{edu.period}</p>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 md:px-16 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          My <span className="text-purple-300">Skills</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "C", "C++", "JavaScript", "MongoDB", "Node.js", "Express.js",
            "React.js", "SQL", "Figma", "HTML5", "CSS3", "Python",
            "Java", "Spring Boot", "Next.js", "Git", "Tailwind CSS",
            "Redux", "TypeScript", "Docker"
          ].map((skill, index) => (
            <div 
              key={index} 
              className="bg-[#1b1638]/50 p-4 text-center rounded-lg border border-[#281f54] hover:border-purple-500/30 hover:bg-[#281f54]/50 transition-all hover:scale-105"
            >
              <p className="text-sm md:text-base">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="px-4 md:px-16 py-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-purple-300">My Hobbies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["🎮 Playing Games", "✈️ Travelling", "🎵 Music & Movies", "📚 Reading", "💻 Coding Challenges", "🏸 Sports"].map((hobby, index) => (
            <div key={index} className="bg-[#1b1638]/50 p-4 rounded-lg border border-[#281f54] hover:border-purple-500/30">
              <p>{hobby}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="px-4 md:px-16 py-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-purple-300">Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Research Paper", 
              description: "Published paper on emerging web technologies",
              year: "2024"
            },
            { 
              title: "Hackathon", 
              description: "Participated in national level coding competition",
              year: "2023"
            },
            { 
              title: "Open Source", 
              description: "Contributed to various open source projects",
              year: "2024"
            },
          ].map((activity, index) => (
            <div key={index} className="bg-[#1b1638]/50 p-6 rounded-lg border border-[#281f54] hover:border-purple-500/30 transition-all hover:scale-[1.02]">
              <p className="text-lg font-semibold mb-2">{activity.title}</p>
              <p className="text-sm text-gray-400 mb-3">{activity.description}</p>
              <p className="text-xs text-purple-400/70">{activity.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-16 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Contact Me</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent" 
              />
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent" 
              />
              <textarea 
                rows="4" 
                placeholder="Message" 
                className="w-full px-4 py-3 bg-[#1b1638]/50 border border-[#281f54] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              ></textarea>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <Phone size={20} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+91-7679004336</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <Mail size={20} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">abhirupbasu90@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-full">
                  <MapPin size={20} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8 border-t border-[#281f54] mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Abhirup Basu. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">Codeforces</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Portfolio;