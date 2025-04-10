import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  return (
    <h1 className="text-white text-3xl md:text-5xl font-bold">
      <Typewriter
        words={['Backend.', 'React Enthusiast.', 'Creative Coder.']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypewriterText;
