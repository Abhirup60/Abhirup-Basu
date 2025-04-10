import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import InterfaceLoader from "../components/InterfaceLoader";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showTaskbarItems, setShowTaskbarItems] = useState(false);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const menuRef = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth <= 480,
        isTablet: window.innerWidth > 480 && window.innerWidth <= 768,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <InterfaceLoader />;

  const { isMobile, isTablet } = screenSize;

  return (
    <div className="h-screen w-full bg-[url('defaultWallpaper.jpg')] bg-cover bg-center relative overflow-hidden">
      {/* Desktop Icons (Now at Top-Left Corner) */}
      <div className={`absolute text-white flex flex-col gap-6 md:gap-8 left-6 top-6 items-start`}>
        <Link to={"https://www.google.com/"}>
          <img src='chromeIcon.svg' alt='Chrome' className='h-10 w-10 cursor-pointer' />
          Chrome
        </Link>

      <Link to={"https://www.google.com/"}>
      <img src='recycle-bin.webp' alt='Recycle Bin' className='h-10 w-10 cursor-pointer' />
      Recycle Bin
      </Link>
        <Link to={"https://vscode.dev/"}>
          <img src='vsCode.png' alt='VS Code' className='h-10 w-10 cursor-pointer' />
          VS Code
        </Link>
        <Link to='/portfolio/abhirup'>
          <img src='me.webp' alt='Me' className='h-10 w-10 cursor-pointer rounded-full' />
          Portfolio
        </Link>
        <Link to='/portfolio/abhirup'>
          <img src='mail.jpg' alt='Mail' className='h-10 w-10 cursor-pointer rounded-full' />
          Contact
        </Link>
      </div>

      {/* Taskbar */}
      <div
        className={`absolute bottom-0 w-full ${
          isMobile ? "h-[50px]" : "h-[55px]"
        } bg-gray-100 shadow-md flex justify-between items-center px-3 md:px-5 border-t border-gray-300`}
      >
        {/* Left Side - Windows Icon & Search */}
        <div className='flex items-center space-x-3'>
          <img
            src='windowsIcon.png'
            alt='Windows Start'
            className='h-[30px] w-[50px] cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setShowTaskbarItems(!showTaskbarItems);
            }}
          />

          {!isMobile && (
            <div className='flex items-center bg-white rounded-3xl px-3 w-[220px] md:w-[250px] h-[36px] shadow-md border'>
              <img src='searchIcon.png' alt='Search' className='h-5 w-5 opacity-50 mr-2' />
              <input type='text' placeholder='Search' className='w-full outline-none text-gray-700 bg-transparent' />
            </div>
          )}
        </div>

        {/* Center - Pinned Apps */}
        <div className={`flex ${isMobile && !showTaskbarItems ? "hidden" : "flex"} space-x-3`}>
          <img src='telegram.jfif' alt='Telegram' className='h-8 w-8 cursor-pointer' />
          <img src='vsCode.png' alt='VS Code' className='h-8 w-8 cursor-pointer' />
          <img src='fileExplorer.png' alt='File Explorer' className='h-8 w-8 cursor-pointer' />
          <img src='sublime.png' alt='Edge' className='h-8 w-8 cursor-pointer' />
          <img src='chromeIcon.svg' alt='Chrome' className='h-8 w-8 cursor-pointer' />
        </div>

        {/* Right Side - System Tray */}
        <div className='flex items-center space-x-2 sm:space-x-3'>
          {!isMobile && <span className='text-sm text-gray-600 hidden sm:inline'>ENG</span>}
          {!isMobile && <img src='wifi.ico' alt='Wi-Fi' className='h-5 w-5 hidden sm:block' />}
          {!isMobile && <img src='sound.jpg' alt='Volume' className='h-5 w-5 hidden sm:block' />}
          <img src='charge.webp' alt='Battery' className='h-5 w-5' />
          <span className='text-sm text-gray-600'>
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          {!isMobile && (
            <span className='text-sm text-gray-600 hidden md:inline'>{new Date().toLocaleDateString()}</span>
          )}
        </div>
      </div>

      {/* Windows Start Menu */}
      {isMenuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute ${
            isMobile
              ? "bottom-[55px] left-2 right-2"
              : isTablet
              ? "bottom-[60px] left-4 w-[80vw]"
              : "bottom-[60px] left-6 w-[320px]"
          } h-[60vh] max-h-[480px] bg-gray-900/95 backdrop-blur-md text-white rounded-lg overflow-hidden shadow-lg border border-gray-700/50`}
        >
          <div className='p-4 h-full flex flex-col'>
            <h2 className='text-lg font-semibold mb-3'>Start Menu</h2>
            <div className='flex-1 grid grid-cols-2 gap-3 overflow-y-auto'>
              {[
                { name: "Documents", icon: "📄" },
                { name: "Pictures", icon: "🖼️" },
                { name: "Settings", icon: "⚙️" },
                { name: "File Explorer", icon: "📁" },
                { name: "Calculator", icon: "🧮" },
                { name: "Camera", icon: "📷" },
                { name: "Mail", icon: "✉️" },
                { name: "Store", icon: "🛒" },
              ].map((item, index) => (
                <button
                  key={index}
                  className='flex flex-col items-center p-3 rounded hover:bg-gray-700/50 transition-colors'
                >
                  <span className='text-2xl mb-1'>{item.icon}</span>
                  <span className='text-xs'>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
