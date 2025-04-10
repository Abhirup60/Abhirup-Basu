import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 
import Loader from "../components/Loader";
import profileImg from "../assets/react.svg";

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
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
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
    <div className="bg-[#0e0b1f] text-white font-sans">
      {/* Header Section */}
      <header className="py-8 px-4 md:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abhirup Basu</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#works" className="hover:text-purple-400">Works</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
        <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 text-sm">Download CV</button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 md:px-0">
        <img
          src={profileImg}
          alt="Abhirup Basu"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto mb-4"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-4">I'm Abhirup Basu</h2>
        <p className="text-lg text-gray-300 mb-6">
          Web Developer | I bring ideas to life using clean and scalable code.
        </p>
        <div className="flex justify-center gap-10">
          <div>
            <p className="text-2xl font-semibold">1</p>
            <p className="text-gray-400">Internships</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">4+</p>
            <p className="text-gray-400">Completed Projects</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">10</p>
            <p className="text-gray-400">Technologies</p>
          </div>
          <div>
            <p className="text-2xl font-semibold">60+</p>
            <p className="text-gray-400">Codeforces Problem</p>
          </div>
        </div>
      </section>

      {/* My Quality Works */}
      <section id="works" className="px-4 md:px-16 py-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">My Quality Works</h3>
        <div className="space-y-4">
          {["Dynamic Website", "Static Website", "IOT Project", "Voice Assistance", "Weather App"].map((work) => (
            <div
              key={work}
              className="bg-[#1b1638] p-4 rounded-md cursor-pointer hover:bg-[#281f54]"
            >
              <h4 className="text-xl font-semibold">{work}</h4>
              <p className="text-sm text-gray-400 mt-2">
                Static websites are simple, with fixed content and no databases
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience and Education */}
      <section className="px-4 md:px-16 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">My Experience</h3>
          <div className="space-y-4">
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2024</p>
              <p className="font-semibold">Web Developer Internship</p>
            </div>
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2023</p>
              <p className="font-semibold">Web Development Training</p>
            </div>
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2024</p>
              <p className="font-semibold">Full Stack Developer Training</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">My Education</h3>
          <div className="space-y-4">
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2022 - 2026</p>
              <p className="font-semibold">B.TECH</p>
              <p>Gargi Memorial Institute of Technology</p>
            </div>
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2020 - 2022</p>
              <p className="font-semibold">Higher Secondary Education (XII)</p>
              <p>Basirhat High School</p>
            </div>
            <div className="bg-[#1b1638] p-4 rounded-md">
              <p>2019 - 2020</p>
              <p className="font-semibold">Secondary Education (X)</p>
              <p>Basirhat High School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 md:px-16 py-12">
        <h3 className="text-2xl font-bold mb-6">My Skills</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "C",
            "C++",
            "JavaScript",
            "MongoDB",
            "Node.js",
            "Express.js",
            "React.js",
            "SQL",
            "Figma",
            "HTML",
            "CSS",
            "Python",
            "Java (Learning)",
            "Spring Boot (Learning)",
            "Next.js (Learning)",
          ].map((skill) => (
            <div key={skill} className="bg-[#1b1638] p-4 text-center rounded-md hover:bg-[#281f54]">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="px-4 md:px-16 py-12">
        <h3 className="text-2xl font-bold mb-4">My Hobbies</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Playing Games</li>
          <li>Travelling</li>
          <li>Music & Movies</li>
        </ul>
      </section>

      {/* Activities Section */}
      <section className="px-4 md:px-16 py-12">
        <h3 className="text-2xl font-bold mb-6">Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Research Paper"].map((activity) => (
            <div key={activity} className="bg-[#1b1638] p-6 rounded-md hover:bg-[#281f54]">
              <p className="text-lg font-semibold">{activity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-16 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-[#1b1638] rounded-md" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-[#1b1638] rounded-md" />
            <input type="text" placeholder="Subject" className="w-full px-4 py-2 bg-[#1b1638] rounded-md" />
            <textarea rows="4" placeholder="Message" className="w-full px-4 py-2 bg-[#1b1638] rounded-md"></textarea>
            <button className="bg-purple-600 px-6 py-2 rounded-md hover:bg-purple-700">Send Message</button>
          </form>
        </div>
        <div>
          <p className="mb-2">📞 +91-7679004336</p>
          <p className="mb-2">📧 abhirupbasu90@gmail.com</p>
          <p>📍 Kolkata, West Bengal, India</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        &copy; 2025 Abhirup Basu. All rights reserved.
      </footer>

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
