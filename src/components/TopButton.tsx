import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="top-button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#008485] hover:bg-[#008485]/90 text-white shadow-xl shadow-[#008485]/30 hover:scale-105 active:scale-95 transition-all duration-200 no-print flex items-center justify-center cursor-pointer"
      aria-label="맨 위로 스크롤"
      title="맨 위로 이동"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
