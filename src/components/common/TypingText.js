import React, { useState, useEffect } from 'react';

const TypingText = ({ word }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!word) return;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const pauseTime = 1000;

    if (!isErasing && index < word.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, index + 1));
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout);
    } else if (isErasing && index > 0) {
      const erasingTimeout = setTimeout(() => {
        setDisplayedText(word.slice(0, index - 1));
        setIndex((prevIndex) => prevIndex - 1);
      }, erasingSpeed);
      return () => clearTimeout(erasingTimeout);
    } else if (index === word.length) {
      const pauseBeforeErasing = setTimeout(() => {
        setIsErasing(true);
      }, pauseTime);
      return () => clearTimeout(pauseBeforeErasing);
    } else if (index === 0 && isErasing) {
      const pauseBeforeTyping = setTimeout(() => {
        setIsErasing(false);
      }, pauseTime);
      return () => clearTimeout(pauseBeforeTyping);
    }
  }, [index, isErasing, word]);

  return (
    <>
      <span className='text-yellow-400'>{displayedText}</span>
      <span className="animate-blink">|</span>
    </>
  );
};

export default TypingText;

