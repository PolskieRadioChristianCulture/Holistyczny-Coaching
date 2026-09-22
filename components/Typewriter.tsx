import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  cursorInterval?: number;
  className?: string;
  cursorClassName?: string;
  highlightWord?: string;
  highlightClassName?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 70,
  cursorInterval = 500,
  className = '',
  cursorClassName = '',
  highlightWord,
  highlightClassName = 'text-blue-500',
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    const cursorTimeout = setInterval(() => {
      setShowCursor(prev => !prev);
    }, cursorInterval);
    return () => clearInterval(cursorTimeout);
  }, [cursorInterval]);

  const renderText = () => {
    if (!highlightWord) return currentText;
    
    const parts = currentText.split(new RegExp(`(${highlightWord})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlightWord.toLowerCase() ? (
        <span key={i} className={highlightClassName}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <span className={className}>
      {renderText()}
      <span 
        className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 inline-block ${cursorClassName}`}
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </span>
  );
};

export default Typewriter;